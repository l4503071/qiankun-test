import { createApp } from "vue";
import App from "./src/index.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

let app = null;

export async function bootstrap() {
  console.log("[vue3] app bootstraped");
}

export async function mount(props = {}) {
  console.log("[vue3] mount", props);
  const { container } = props;
  app = createApp(App);
  app.use(ElementPlus);
  app.mount(container ? container.querySelector("#vue3") : document.getElementById("vue3"));
}

export async function unmount(props) {
  console.log("[vue3] unmount");
  app.unmount();
  app = null;
}

if (!window.__POWERED_BY_QIANKUN__) {
  bootstrap().then(mount);
}
