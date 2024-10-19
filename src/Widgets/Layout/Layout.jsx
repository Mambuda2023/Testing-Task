import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import SectionForm from "../Section-Form/Section-Form";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="grid-layout ">
      <Header className="header" />
      <main className="main">
        <Outlet />
        <SectionForm />
      </main>
      <NavBar className="nav-bar" />
    </div>
  );
};
export default Layout;
