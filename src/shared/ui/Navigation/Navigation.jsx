import { NavLink } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import dashboard from "../../../Widgets/NavBar/assets/dashboard.svg";
import transaction from "../../../Widgets/NavBar/assets/transaction.svg";
import accounts from "../../../Widgets/NavBar/assets/accounts.svg";
import investment from "../../../Widgets/NavBar/assets/investment.svg";
import creditCard from "../../../Widgets/NavBar/assets/credit-card.svg";
import loans from "../../../Widgets/NavBar/assets/loans.svg";
import service from "../../../Widgets/NavBar/assets/service.svg";
import priveliges from "../../../Widgets/NavBar/assets/my-priveliges.svg";
import settings from "../../../Widgets/NavBar/assets/settings.svg";
import "./navigation.css";

const Navigation = () => {
  const navigationDashBoard = [
    {
      id: nanoid(),
      img: dashboard,
      text: "Dashboard",
      path: "/home",
    },
    {
      id: nanoid(),
      img: transaction,
      text: "Transactions",
      path: "/transaction",
    },
    {
      id: nanoid(),
      img: accounts,
      text: "Accounts",
      path: "/accounts",
    },
    {
      id: nanoid(),
      img: investment,
      text: "Investments",
      path: "/investment",
    },
    {
      id: nanoid(),
      img: creditCard,
      text: "Credit Cards",
      path: "/creditCard",
    },
    {
      id: nanoid(),
      img: loans,
      text: "Loans",
      path: "/loans",
    },

    {
      id: nanoid(),
      img: service,
      text: "Services",
      path: "/service",
    },
    {
      id: nanoid(),
      img: priveliges,
      text: "My Privileges",
      path: "/priveliges",
    },
    {
      id: nanoid(),
      img: settings,
      text: "Setting",
      path: "/settings",
    },
  ];
  return (
    <>
      <ul className="dashboard-navigation">
        {navigationDashBoard.map((element) => (
          <li key={element.id} className="dashboard-navigation-item">
            <img
              src={element.img}
              alt={element.text}
              className="dashboard-navigation-img"
            />
            <NavLink className="text" to={element.path}>
              {element.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Navigation;
