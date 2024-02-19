import { ReactNode, createContext, useEffect, useState } from "react";

import { isEmpty } from "lodash";
import _ from "lodash";
import { OrgConfig, SelectedOrgItemList } from "types/org";
import useMoveTreeItem from "./useMoveTreeItem";
import { orgDepartmentConfig } from "./utils";

interface OrgContextInterface {
  data: any;
  orgCfg: OrgConfig;
  isCheckbox: any;
  setData: any;
  onMove: any;
  keyword: string;
  single?: boolean;
  userOnly?: boolean;
  deptOnly?: boolean;
  onChangeSelectDept: any;
  onChangeSelectUser: any;
  onChangeTreeData?: any;
}

const OrgContext = createContext<OrgContextInterface | null>(null);

interface OrgProviderProps {
  children: ReactNode;
  keyword: string;
  orgConfig: OrgConfig;
  isCheckbox?: boolean;
  single?: boolean;
  userOnly?: boolean;
  deptOnly?: boolean;
  onChangeTreeData?: (treeData: any) => void;
  onChangeSelectDept: (depts: SelectedOrgItemList) => void;
  onChangeSelectUser: (users: SelectedOrgItemList) => void;
}

export const OrgProvider = (props: OrgProviderProps) => {
  const {
    orgConfig,
    children,
    isCheckbox = false,
    onChangeSelectDept,
    keyword: originKeyWord,
    single,
    onChangeSelectUser,
    userOnly,
    deptOnly,
    onChangeTreeData,
  } = props;
  const { data, setData, onMove } = useMoveTreeItem([]);
  const [orgCfg, setOrgCfg] = useState<OrgConfig>(
    orgConfig || orgDepartmentConfig
  );
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    if (orgConfig) {
      if (!_.isEqual(orgConfig, orgCfg)) {
        setOrgCfg(orgConfig);
      }
    } else {
      setOrgCfg(orgDepartmentConfig);
    }
  }, [orgConfig]);

  useEffect(() => {
    if (originKeyWord) {
      if (!_.isEqual(originKeyWord, keyword)) {
        setKeyword(originKeyWord);
      }
    } else {
      setKeyword("");
    }
  }, [originKeyWord]);

  return (
    <OrgContext.Provider
      value={{
        data,
        orgCfg,
        isCheckbox,
        setData,
        onMove,
        keyword,
        single,
        userOnly,
        deptOnly,
        onChangeSelectDept,
        onChangeSelectUser,
        onChangeTreeData,
      }}
    >
      {children}
    </OrgContext.Provider>
  );
};

// export const SearchWrapper = (WrappedComponent: any) => {
//   const [keyword, setKeyword] = useState<string>('');

//   return (props: OrgTreeProps) => {
//     return (
//       <Stack
//         sx={{
//           p: 2,
//           width: '100%',
//           height: '100%'
//         }}
//       >
//         <OrgSearch onChangeKeyword={setKeyword} />
//         <Box sx={{ flex: 1, overflowY: 'auto' }}>
//           <WrappedComponent {...props} keyword={keyword} sx={{ flex: 1 }} />
//         </Box>
//       </Stack>
//     );
//   };
// };

export default OrgContext;
