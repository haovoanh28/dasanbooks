import { useRoutes } from "react-router-dom";
import MainLayout from "base/layouts/MainLayout";
import { Navigate } from "react-router-dom";

const defaultPath = "/dashboard";
const moduleRoutes: any = [];
const requireAppRoutes = require.context(
  "/src",
  true,
  /^\.\/.*(?<!Public)Route.tsx$/
);

console.log("???");
console.log("requireAppRoutes ==> ", requireAppRoutes.keys());

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

console.log("moduleRoutes", moduleRoutes);

const mainRoutes = {
  path: "/",
  children: [
    {
      index: true,
      element: <Navigate to="/dashboard" replace />,
    },
    ...moduleRoutes,
  ],
  // children: moduleRoutes,
};

export default function AppRoutes() {
  return useRoutes([mainRoutes]);
}
