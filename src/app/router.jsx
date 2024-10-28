import { createBrowserRouter } from "react-router-dom";
import Settings from "../pages/Settings/Settings";
import Transaction from "../pages/Transaction/Transaction";
import Accounts from "../pages/Accounts/Accounts";
import Investments from "../pages/Investments/Investments";
import CreditCard from "../pages/CreditCard/CreditCard";
import Loans from "../pages/Loans/Loans";
import Services from "../pages/Services/Services";
import Privileges from "../pages/Privileges/Privileges";
import Error from "../pages/Error/Error";
import Dashboard from "../pages/DashBoard/DashBoard";
import App from "./App";

import Layout from "../Widgets/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "settings",
        element: <Settings />,
      },
      { path: "transaction", element: <Transaction /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "accounts", element: <Accounts /> },
      { path: "investment", element: <Investments /> },
      { path: "creditCard", element: <CreditCard /> },
      { path: "loans", element: <Loans /> },
      { path: "services", element: <Services /> },
      { path: "privileges", element: <Privileges /> },
    ],
  },
]);
