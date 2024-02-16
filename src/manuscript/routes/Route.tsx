import { lazy } from "react";
import { MANUSCRIPT_URL } from "manuscript/constants";
import { Navigate } from "react-router-dom";

import { RouteObject } from "react-router-dom";
import LazyLoader from "base/components/LazyLoader";

const MainContainer = LazyLoader(
  lazy(() => import("manuscript/containers/MainContainer"))
);
const ListPage = LazyLoader(lazy(() => import("manuscript/pages/ListPage")));
const ViewPage = LazyLoader(lazy(() => import("manuscript/pages/ViewPage")));
const PersonalPage = LazyLoader(
  lazy(() => import("manuscript/pages/PersonalPage"))
);

const routes: RouteObject = {
  path: MANUSCRIPT_URL,
  element: <MainContainer />,
  children: [
    {
      index: true,
      element: <Navigate to={`/${MANUSCRIPT_URL}/all`} />,
    },
    {
      path: "all",
      element: <ListPage />,
    },
    {
      path: "my",
      element: <PersonalPage />,
    },
    {
      path: "view/:id",
      element: <ViewPage />,
    },
  ],
};

export default routes;
