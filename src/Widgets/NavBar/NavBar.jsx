import { memo } from "react";
import Navigation from "./UI/Navigation/Navigation";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <Navigation />
    </div>
  );
};
export default memo(NavBar);
