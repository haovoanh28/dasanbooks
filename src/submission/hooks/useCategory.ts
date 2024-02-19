import useGet from "base/hooks/useGet";

import {SUBMISSION_GET_CATEGORY_URL} from "submission/constants";
import queryKeys from "submission/constants/queryKeys";

export const useGetCategory = () => {
  return useGet<any>(queryKeys.getCategory, SUBMISSION_GET_CATEGORY_URL);
}