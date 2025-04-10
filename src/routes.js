import React from "react";
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
import EventLogging from "views/Dashboard/EventLogging";
import ProtectedRoute from "components/ProtectedRoute";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
  ActivityIcon,
} from "components/Icons/Icons";

const wrapProtectedRoute = (Component) => {
  return <ProtectedRoute><Component /></ProtectedRoute>;
};

var dashRoutes = [
  // {
  //   path: "/",
  //   name: "Sign In",
  //   component: SignIn,
  //   layout: "/auth",
  // },
  // {
  //   path: "/signin",
  //   name: "Sign In",
  //   rtlName: "لوحة القيادة",
  //   icon: <DocumentIcon color="inherit" />,
  //   component: SignIn,
  //   layout: "/auth",
  // },
  // {
  //   path: "/signup",
  //   name: "Sign Up",
  //   rtlName: "لوحة القيادة",
  //   icon: <RocketIcon color="inherit" />,
  //   component: SignUp,
  //   layout: "/auth",
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: () => wrapProtectedRoute(Dashboard),
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: () => wrapProtectedRoute(Tables),
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    rtlName: "لوحة القيادة",
    icon: <CreditIcon color="inherit" />,
    component: () => wrapProtectedRoute(Billing),
    layout: "/admin",
  },
  {
    path: "/event-logging",
    name: "Event Logging",
    rtlName: "سجل الأحداث",
    icon: <ActivityIcon color="inherit" />,
    component: () => wrapProtectedRoute(EventLogging),
    layout: "/admin",
  },
  {
    path: "/rtl-support-page",
    name: "RTL",
    rtlName: "آرتيإل",
    icon: <SupportIcon color="inherit" />,
    component: () => wrapProtectedRoute(RTLPage),
    layout: "/rtl",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: () => wrapProtectedRoute(Profile),
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        rtlName: "لوحة القيادة",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        rtlName: "لوحة القيادة",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];

export default dashRoutes;
