import { lazy } from "react";
import LazyLoader from "base/components/LazyLoader";
import { RouteObject, Outlet } from "react-router-dom";

const LoginPage = lazy(() => import("base/pages/LoginPage"));

const publicRoutes: RouteObject[] = [];
const requirePublicRoutes = require.context(
  "/src",
  true,
  /^\.\/.*PublicRoute.tsx$/
);
requirePublicRoutes.keys().forEach((path: any) => {
  const route = requirePublicRoutes(path).default;
  publicRoutes.push(route);
});

const routes: RouteObject = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        ...publicRoutes,
      ],
    },
  ],
};

export default routes;
