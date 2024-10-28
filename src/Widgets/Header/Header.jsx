import Logo from "./assets/Logo.svg";
import HeaderImg from "./assets/profile-img.png";
import SearchIcon from "./assets/search-icon.svg";
import SettingsIcon from "./assets/settings.svg";
import NotificationIcon from "./assets/notification.svg";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import { memo } from "react";

const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-box">
          <img src={Logo} alt="Logo" />
          <h1 className="header-title">
            {location.pathname === "/user/dashboard"
              ? "Dashboard"
              : location.pathname === "/user/settings"
              ? "Settings"
              : location.pathname === "/user/transaction"
              ? "Transaction"
              : location.pathname === "/user/accounts"
              ? "Accounts"
              : location.pathname === "/user/investments"
              ? "Investments"
              : location.pathname === "/user/creditCard"
              ? "Credit Cards"
              : location.pathname === "/user/loans"
              ? "Loans"
              : location.pathname === "/user/investment"
              ? "Investment"
              : location.pathname === "/user/services"
              ? "Services"
              : location.pathname === "/user/privileges"
              ? "My Privileges"
              : ""}
          </h1>
        </div>
        <nav className="header-navigation">
          <ul className="header-navigation-items">
            <li className="header-navigation-item search">
              <img src={SearchIcon} alt="Search" />
              <input type="text" placeholder="Search for something" />
            </li>
            <li className="header-navigation-item">
              <NavLink to="user/settings">
                <img src={SettingsIcon} alt="Settings Icon" />
              </NavLink>
            </li>
            <li className="header-navigation-item">
              <img src={NotificationIcon} alt="Notification Icon" />
            </li>
            <li className="header-navigation-item">
              <button>
                <img
                  className="header-profile-img"
                  src={HeaderImg}
                  alt="Header profile img"
                  height={50}
                  width={50}
                />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default memo(Header);
