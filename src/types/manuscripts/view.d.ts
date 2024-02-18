import { IdName } from "../base";

export interface ManuscriptCommentData {
  id: number | string;
  name: string;
  position: string;
  date: string;
  content: string;
}

export interface ManuscriptData {
  id: number | string;
  category_name: string;
  type: IdName;
  title: string;
  content: string;
  creator_name: string;
  created_on: string;
  status: string;
  reviewers: IdName[];
  attachments: IdName[];
  comments: ManuscriptCommentData[];
}

export interface ManuscriptViewResponse {
  rows: ManuscriptData;
}

export interface AddManuscriptParams {
  title: string;
  content: string;
  phone: string;
  email: string;
  content_type: string | number;
  category_id: string;
}
