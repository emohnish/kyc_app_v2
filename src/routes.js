import React from "react";
import { Navigate } from "react-router-dom";

import DashboardLayout from "../src/layout/Dashboardlayout/index";
import HomeView from "../src/views/Home/index";
import AccountOnboarding from "./views/AccountOnboarding/index";

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    exact: true,
    children: [
      { path: "/", exact: true, element: <HomeView /> },
      {
        path: "accountOnboarding",
        element: <AccountOnboarding />,
      },
      { path: "accountOnboarding1", element: <h1> Account Onboarding </h1> },
      { path: "rollingReview", element: <h1> Rolling Review </h1> },
      {
        path: "updateRollingReview",
        element: <h1> Update Rolling Review Page </h1>,
      },
      { path: "help", element: <h1> Help Page</h1> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/app",
    element: <h1> Dashboard Page</h1>,
    children: [
      { path: "login", element: <h1> Dashboard Page</h1> },
      { path: "register", element: <h1> Dashboard Page</h1> },
      { path: "404", element: <h1> Dashboard Page</h1> },
      { path: "/", element: <Navigate to="/app/dashboard" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
