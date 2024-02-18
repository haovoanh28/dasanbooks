import { IdName, PaginationResponse } from "../base";

export interface ManuscriptListItemData {
  id: string;
  category_name: string;
  type: IdName;
  title: string;
  creator_name: string;
  created_on: string;
  status: string;
  reviewers: IdName[];
}

export interface ManuscriptListResponse {
  pagination: PaginationResponse;
  rows: ManuscriptListItemData[];
}
