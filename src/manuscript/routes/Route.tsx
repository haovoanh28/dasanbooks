import { lazy } from "react";
import { MANUSCRIPT_URL } from "manuscript/constants";
import { Navigate } from "react-router-dom";

import { RouteObject } from "react-router-dom";

const MainContainer = lazy(() => import("manuscript/containers/MainContainer"));
const ListPage = lazy(() => import("manuscript/pages/ListPage"));
const ViewPage = lazy(() => import("manuscript/pages/ViewPage"));

const routes: RouteObject = {
  path: MANUSCRIPT_URL,
  element: <MainContainer />,
  children: [
    {
      index: true,
      element: <Navigate to={`/${MANUSCRIPT_URL}/list`} />,
    },
    {
      path: "list/*",
      element: <ListPage />,
    },
    {
      path: "view/:id",
      element: <ViewPage />,
    },
  ],
};

export default routes;
