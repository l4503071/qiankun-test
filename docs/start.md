
# start(opts)
1. opts.prefetch 默认为 true
执行`doPrefetchStrategy(microApps, prefetch, importEntryOpts)`
- `microApps`: 通过 `registerMicroApps` 注册的应用列表；
- `prefetch`: 等价于 `opts.prefetch`
  - true: 在第一个微应用 mount 完成后预加载其他微应用静态资源；
  - 'all': 主应用 start 后开始预加载所有微应用静态资源；
  - string[]: 在第一个微应用 mount 完成后开始预加载数组内的微应用静态资源；
  - function: 自定义应用预加载资源逻辑；
- `importEntryOpts`: opts 中排除 prefetch, sandbox, singular, urlRerouteOnly 以外的所有属性；
  - sandbox: 沙箱配置
    - 