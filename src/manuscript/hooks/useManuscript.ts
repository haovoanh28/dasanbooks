import useGet from "base/hooks/useGet";
import {
  GET_MANUSCRIPT_LIST_URL,
  GET_MANUSCRIPT_DETAIL_URL,
} from "manuscript/constants";
import queryKeys from "manuscript/constants/queryKeys";
import { ManuscriptListResponse } from "types/manuscripts/list";
import { ManuscriptViewResponse } from "types/manuscripts/view";
import { UseBaseQueryOptions, UseQueryOptions } from "@tanstack/react-query";

export const useGetManuscriptList = (
  options?: Omit<UseQueryOptions<ManuscriptListResponse>, "queryKey">
) => {
  return useGet<ManuscriptListResponse>(
    queryKeys.getManuscriptList,
    GET_MANUSCRIPT_LIST_URL,
    {},
    options
  );
};

export const useGetManuscriptDetail = (id: string | number | undefined) => {
  return useGet<ManuscriptViewResponse>(
    [queryKeys.getManuscriptDetail, id],
    GET_MANUSCRIPT_DETAIL_URL,
    { id },
    { enabled: !!id }
  );
};
