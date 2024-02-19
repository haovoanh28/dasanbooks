import useGet from "base/hooks/useGet";
import { GET_MANUSCRIPT_LIST_URL } from "manuscript/constants";
import queryKeys from "manuscript/constants/queryKeys";
import { ManuscriptListResponse } from "types/manuscripts/list";

export const useGetManuscriptList = () => {
  return useGet<ManuscriptListResponse>(
    queryKeys.getManuscriptListUrl,
    GET_MANUSCRIPT_LIST_URL
  );
};
