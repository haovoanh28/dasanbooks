import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import PageLayout from "base/layouts/PageLayout";
import AuthGuard from "base/route-guard/AuthGuard";

const moduleRoutes: RouteObject[] = [];
const requireAppRoutes = require.context(
  "/src",
  true,
  /^\.\/.*(?<!Public)Route.tsx$/
);

requireAppRoutes.keys().forEach((path: any) => {
  const route = requireAppRoutes(path).default;
  moduleRoutes.push(route);
});

const routes: RouteObject = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <AuthGuard>
          <PageLayout />
        </AuthGuard>
      ),
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

export default routes;
