import { useRoutes } from "react-router-dom";
import PublicRoutes from "base/routes/PublicRoutes";
import AuthRoutes from "base/routes/AuthRoutes";

console.log("AuthRoutes", AuthRoutes);
console.log("PublicRoutes", PublicRoutes);

export default function AppRoutes() {
  return useRoutes([AuthRoutes, PublicRoutes]);
}
