
# start(opts)
1. opts.prefetch 默认为 true，执行`doPrefetchStrategy(microApps, prefetch, importEntryOpts)`
参数:
   - `microApps`: 通过 `registerMicroApps` 注册的应用列表；
   - `prefetch`: 等价于 `opts.prefetch`
     - true: 在第一个微应用 mount 完成后预加载其他微应用静态资源；
     - 'all': 主应用 start 后开始预加载所有微应用静态资源；
     - string[]: 在第一个微应用 mount 完成后开始预加载数组内的微应用静态资源；
     - function: 自定义应用预加载资源逻辑；
   - `importEntryOpts`: opts 中排除 prefetch, sandbox, singular, urlRerouteOnly 以外的所有属性；
     - sandbox: 沙箱配置
       - true: 单例(singular=true)模式下，子应用之间的样式没有相互影响，子应用和主应用之间存在相互影响；
       - { }
         - strictStyleIsolation: 使用 shadow dom 确保子应用样式隔离；
         - experimentalStyleIsolation: 增加样限定规则，确保子应用样式隔离；
     - fetch: 自定义 fetch 方法；
逻辑:
  - prefetch = true, 执行 `prefetchAfterFirstMounted(microApps, importEntryOpts)`
    - 监听 'single-spa:first-mount' 事件，调用 `prefetch(app, importEntryOpts)` 预加载所有子应用；
    - prefetch 通过 `import-html-entry` 第三包解析出 js 和 link 内容，并请求数据；

2. 执行 'single-spa'.start();

# registerMicroApps(apps, lifeCycles)
1. 执行 'single-spa'.registerApplication({name, app, activeWhen, customProps})
参数:
  - `name`: 应用名称
  - `app`: 微应用实例，支持 `Application | () => Application | Promise<Application>`
     - app()函数逻辑：调用 `loadApp` 加载应用，返回 {mount, bootstrap, unmount, name };
     - `loadApp(app, configuration, lifeCycles)`
       - 通过 `import-html-entry` 解析 html 文件，得到 `template`、`execScripts`
       - 通过 `getDefaultTplWrapper` 在 `template` 上包裹一层 `div`，得到 `appContent`
       - 开启 `strictStyleIsolation` 则通过 `shadow DOM` 创建隔离容器；
       - 开启 `scopedCSS` 则遍历 style 标签，`css.process` 在外层最外层加上样式限制；
         - 通过正则匹配加上限制，通过 `MutationObserver` 监听变化，动态更改；
       - 通过 `getRender` 得到 `render` 渲染函数;
       - 调用 `render` 实现加载 dom 结构；
       - 通过 `createSandboxContainer` 创建 沙箱环境 `sandboxContainer`
       - 通过 `execScripts(sandboxContainer)` 在沙箱环境下执行操作；
       - 根据 `lifeCycles` 组装返回的 `mount` 和 `unmount`
