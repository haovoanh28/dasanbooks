export interface MailTemplateListItem {
  id: string | number;
  title: string;
  content: string;
  created_on: string;
}

export interface MailTemplateListResponse {
  rows: MailTemplateListItem[];
}
