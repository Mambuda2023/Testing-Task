import Logo from "./assets/Logo.svg";
import HeaderImg from "./assets/profile-img.png";
import SearchIcon from "./assets/search-icon.svg";
import SettingsIcon from "./assets/settings.svg";
import NotificationIcon from "./assets/notification.svg";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-box">
          <img src={Logo} alt="Logo" />
          <h1 className="header-title">Settings</h1>
        </div>
        <nav className="header-navigation">
          <ul className="header-navigation-items">
            <li className="header-navigation-item search">
              <img src={SearchIcon} alt="Search" />
              <input type="text" placeholder="Search for something" />
            </li>
            <li className="header-navigation-item">
              <img src={SettingsIcon} alt="Settings Icon" />
            </li>
            <li className="header-navigation-item">
              <img src={NotificationIcon} alt="Notification Icon" />
            </li>
            <li className="header-navigation-item">
              <img
                className="header-profile-img"
                src={HeaderImg}
                alt="Header profile img"
                height={50}
                width={50}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;