export type Department = {
  isFolder: true;
  isLazy: boolean;
  children?: User[] | Department | any;
  hasChildren?: boolean;
  share?: boolean;
  key?: string;
  no?: string;
  type?: string;
  id?: string;
  fid?: string;
  leaf?: boolean;
  name?: string;
  text?: string;
  cn?: string | number;
  country?: string;
  dept_type?: string | number;
  email?: string;
  eng_name?: string;
  eng_short?: string;
  expand?: boolean;
  fulldept?: string;
  gmail?: string;
  groupmail?: string;
  groupname?: string;
  groupno?: string | number;
  head?: string | number;
  receipt?: string | number;
  seq?: string | number;
  title?: string;
  up?: string | number;
  // parentDepartment to keep trach it parent folder
  parentDepartment?: Department;
  seqno?: string | number;
  userno?: string;
  userNo?: string;
  isbase?: boolean;
  fldseq?: string;
  pos?: string;
  top?: string;
  mobile?: string;
  name2?: string;
  isRoot?: boolean;
  isFavorite?: boolean;
  icon?: React.FC<any>; // for custom icon
  [x: string]: any; // for other data type
};

export type User = {
  id: string;
  type?: string;
  isFolder?: boolean;
  userno: string | number;
  username: string;
  key?: string;
  cn?: string | number;
  duty?: string;
  dutyno?: string | number;
  email?: string;
  fax?: string;
  fulldept?: string;
  fullname?: string;
  fullrank?: string;
  groupname?: string;
  groupno?: string | number;
  ishead?: string | number;
  long?: string;
  mobile?: string | number;
  name?: string;
  position?: string | number;
  rankno?: string | number;
  seqno?: string;
  title?: string;
  no?: string;
  kind?: string;
  fa_auth?: string;
};

export type SelectedOrgItemList = {
  [x: string | number]: SelectedOrgItem;
};

export type SelectedOrgItem = Department | User;

export interface OrgConfig {
  init: {
    getParams: (searchValue: string, extraParams?: any) => {} | null;
    // used to parse api value to departmentData
    getValue?: (rows: any, parentDepartment?: Department) => Department[] | {};
    // api init data
    api: (params: any, queryKeys?: string[], options?: any) => any;
  };
  expand: {
    // key is current item key, department is current item data
    getParams: (
      key: string,
      searchValue: string,
      department?: Department,
      extraParams?: any
    ) => {} | null;
    // used to parse api value to departmentData
    getValue?: (rows: any, parentDepartment?: Department) => Department[] | {};
    // api children list
    api: (params: any, queryKeys?: string[], options?: any) => any;
  };
  user?: {
    // key is current item key, department is current item data
    getParams: (
      key: string,
      searchValue: string,
      department?: Department,
      extraParams?: any
    ) => {} | null;
    // used to parse api value to departmentData
    getValue?: (rows: any, parentDepartment?: Department) => Department[] | {};
    // api children list
    api: (params: any, queryKeys?: string[], options?: any) => any;
  };
}
