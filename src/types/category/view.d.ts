import { IdName } from "../base";

export interface CategoryDetailData {
  id: string | number;
  name: string;
  type: IdName;
  creator_name: string;
  created_on: string;
  updated_on: string;
  reviewers: IdName[];
}

export interface CategoryViewResponse {
  rows: CategoryDetailData;
}
