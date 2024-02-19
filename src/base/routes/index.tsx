import { useRoutes } from "react-router-dom";
import MainLayout from "base/layouts/MainLayout";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import PageLayout from "base/layouts/PageLayout";

const moduleRoutes: RouteObject[] = [];
const publicRoutes: RouteObject[] = [];
const requireAppRoutes = require.context(
  "/src",
  true,
  /^\.\/.*(?<!Public)Route.tsx$/
);
const requirePublicRoutes = require.context(
  "/src",
  true,
  /^\.\/.*PublicRoute.tsx$/
);
console.log("requireAppRoutes", requireAppRoutes.keys());
console.log("requirePublicRoutes", requirePublicRoutes.keys());

requireAppRoutes.keys().forEach((path: any) => {
  const route = requireAppRoutes(path).default;
  moduleRoutes.push(route);
});

requirePublicRoutes.keys().forEach((path: any) => {
  const route = requirePublicRoutes(path).default;
  publicRoutes.push(route);
});

const mainRoutes: RouteObject = {
  element: <PageLayout />,
  children: [
    // {
    //   index: true,
    //   element: <Navigate to="/dashboard" replace />,
    // },
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Navigate to="/dashboard" replace />,
        },
        ...moduleRoutes,
      ],
    },
  ],
};

// publicRoutes use their own layout
export default function AppRoutes() {
  return useRoutes([mainRoutes, ...publicRoutes]);
}
