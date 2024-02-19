import useGet from "base/hooks/useGet";

import {
  GET_CATEGORY_VIEW_URL,
  GET_CATEGORY_LIST_URL,
} from "setting/constants";
import queryKeys from "setting/constants/queryKeys";

import { CategoryListReponse } from "types/category/list";
import { CategoryViewResponse } from "types/category/view";

export const useGetCategoryList = () => {
  return useGet<CategoryListReponse>(
    queryKeys.getCategoryList,
    GET_CATEGORY_LIST_URL
  );
};

export const useGetCategoryView = (params: any, opt: any) => {
  const keys = [queryKeys.getCategoryView, params.id];
  return useGet<CategoryViewResponse>(keys, GET_CATEGORY_VIEW_URL, params, opt);
};
