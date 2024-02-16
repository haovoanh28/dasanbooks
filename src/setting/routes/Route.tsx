import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { SETTING_URL } from "setting/constants";
import LazyLoader from "base/components/LazyLoader";

const MailTemplatePage = LazyLoader(
  lazy(() => import("setting/pages/MailTemplatePage"))
);
const UserAssignmentPage = LazyLoader(
  lazy(() => import("setting/pages/UserAssignmentPage"))
);

const route: RouteObject = {
  path: SETTING_URL,
  children: [
    {
      path: "mail-template",
      element: <MailTemplatePage />,
    },
    {
      path: "user-assignment",
      element: <UserAssignmentPage />,
    },
  ],
};

export default route;