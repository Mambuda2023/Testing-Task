import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="grid-layout ">
      <Header className="header" />
      <main className="main">
        <Outlet />
      </main>
      <NavBar className="nav-bar" />
    </div>
  );
};
export default Layout;
