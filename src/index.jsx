import { start } from "qiankun";
import { Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [menu, setMenu] = useState("menu1");
  const navigate = useNavigate();
  function handleClick(e) {
    setMenu(e.key);
    navigate(e.key);
  }
  return (
    <div className="container" >
      <Menu selectedKeys={[menu]} onClick={handleClick} mode="horizontal">
        <Menu.Item key="menu1">menu1</Menu.Item>
        <Menu.Item key="menu2">menu2</Menu.Item>
        <Menu.Item key="menu3">menu3</Menu.Item>
      </Menu>
      <div id="menu1"></div>
      <div id="menu2"></div>
    </div>
  );
}
