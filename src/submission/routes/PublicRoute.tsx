import { lazy } from "react";
import { SUBMISSION_URL } from "submission/constants";

import { RouteObject } from "react-router-dom";

const MainContainer = lazy(() => import("submission/containers/MainContainer"));
const MainPage = lazy(() => import("submission/pages/MainPage"));

const routes: RouteObject = {
  path: SUBMISSION_URL,
  element: <MainContainer />,
  children: [
    {
      path: "",
      element: <MainPage />,
    }
  ],
};

export default routes;
