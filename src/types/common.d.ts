export interface PaginationResponse {
  max: number;
  current: number;
  total: number;
}

export interface IdName {
  id: string | number;
  name: string;
}
