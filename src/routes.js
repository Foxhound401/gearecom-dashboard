import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import UserProfileLite from "./views/UserProfileLite";
import Errors from "./views/Errors";
import AddNewProduct from "./views/AddNewProduct";
import AddNewUser from "./views/AddNewUser";
import ProductManagement from "./views/ProductManagement";
import UserManagement from "./views/UserManagement";
import LoginDashboard from "./views/LoginDashboard";
import DashboardOverview from "./views/DashboardOverview";

export default [
  {
    path: "/",
    exact: true,
    layout: LoginDashboard,
    component: () => <Redirect to="/login-dashboard" />
  },
  {
    path: "/login-dashboard",
    layout: LoginDashboard,
    component: LoginDashboard,
  },
  {
    path: "/dashboard-overview",
    layout: DefaultLayout,
    component: DashboardOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-product",
    layout: DefaultLayout,
    component: AddNewProduct
  },
  {
    path: "/add-new-user",
    layout: DefaultLayout,
    component: AddNewUser
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/tables-products",
    layout: DefaultLayout,
    component: ProductManagement
  },
  {
    path: "/tables-users",
    layout: DefaultLayout,
    component: UserManagement
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfileLite
  },
];
