export interface ActivityListItem {
  id: string | number;
  title: string;
  creator_name: string;
  created_on: string;
  action: string;
  data: {
    status: string;
  };
  change: {
    status: string;
  };
}

export interface ActivityListResponse {
  rows: ActivityListItem[];
}
