import { start, registerMicroApps } from "qiankun";
import App from "./src/index.jsx";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";

registerMicroApps([
  {
    name: "menu1",
    entry: "//localhost:3000",
    container: "#menu1",
    activeRule: "/menu1",
  },
  {
    name: "menu2",
    entry: "//localhost:3001",
    container: "#menu2",
    activeRule: "/menu2",
  },
]);

start({
  sandbox: true,
});

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("app")
);
