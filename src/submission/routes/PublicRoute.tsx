import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { SUBMISSION_URL } from "submission/constants";

import { RouteObject } from "react-router-dom";

const MainContainer = lazy(() => import("submission/containers/MainContainer"));
const ListPage = lazy(() => import("submission/pages/ListPage"));
const ViewPage = lazy(() => import("submission/pages/ViewPage"));

const routes: RouteObject = {
  path: SUBMISSION_URL,
  element: <MainContainer />,
  children: [
    {
      index: true,
      element: <Navigate to={`/${SUBMISSION_URL}/list`} />,
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
