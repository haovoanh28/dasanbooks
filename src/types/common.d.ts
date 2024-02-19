export interface PaginationResponse {
  max: number;
  current: number;
  total: number;
}

export interface IdName {
  id: string | number;
  name: string;
}

export interface SubmissionCategory {
  id: string | number;
  type: string | number;
  name: string
}
