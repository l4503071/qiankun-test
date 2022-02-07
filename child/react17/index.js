import ReactDOM from "react-dom";
import App from "./src/index";

export async function bootstrap() {
  console.log("[react17] app bootstraped");
}

export async function mount(props = {}) {
  console.log("[react17] mount");
  const { container } = props;
  ReactDOM.render(<App />, container ? container.querySelector("#react17") : document.getElementById("react17"));
}

export async function unmount(props) {
  console.log("[react17] unmount");
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector("#react17") : document.getElementById("react17"));
}

if (!window.__POWERED_BY_QIANKUN__) {
  bootstrap().then(mount);
}
