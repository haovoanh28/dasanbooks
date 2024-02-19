import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { DASHBOARD_URL } from "dashboard/constants";
import LazyLoader from "base/components/LazyLoader";

const MainPage = LazyLoader(lazy(() => import("dashboard/pages/MainPage")));

const routes: RouteObject = {
  path: DASHBOARD_URL,
  element: <MainPage />,
};

export default routes;
