import { useRoutes } from "react-router-dom";
import MainLayout from "base/layouts/MainLayout";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import PageLayout from "base/layouts/PageLayout";

const defaultPath = "/dashboard";
const moduleRoutes: any = [];
const requireAppRoutes = require.context(
  "/src",
  true,
  /^\.\/.*(?<!Public)Route.tsx$/
);

requireAppRoutes.keys().forEach((path: any) => {
  const route = requireAppRoutes(path).default;
  if (route.path === defaultPath) {
    // check exist or not
    moduleRoutes.unshift({
      index: true,
      element: <Navigate to={defaultPath} />,
    });
  }
  moduleRoutes.push(route);
});

const mainRoutes: RouteObject = {
  path: "/",
  element: <PageLayout />,
  children: [
    {
      index: true,
      element: <Navigate to="/dashboard" replace />,
    },
    ...moduleRoutes,
  ],
};

export default function AppRoutes() {
  return useRoutes([mainRoutes]);
}
