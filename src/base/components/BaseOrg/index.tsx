import { useRef, useState } from "react";

import { Box, Stack, SxProps } from "@mui/material";

import OrgSearch from "./OrgSearch";
import { OrgProvider } from "./OrgContext";
import OrgTree from "./OrgTree";
import { Department, OrgConfig, SelectedOrgItemList } from "types/org";

interface OrgTreeV2Props {
  search?: boolean;
  // selectedData?: SelectedOrgItemList;
  orgConfig: OrgConfig;
  draggable?: boolean;
  onChangeTreeData?: (treeData: any) => void;
  onChangeSelectDept: (depts: SelectedOrgItemList) => void;
  onChangeSelectUser: (users: SelectedOrgItemList) => void;
  isCheckbox?: boolean;
  sx?: SxProps; // style for org wrapper
  userOnly?: boolean;
  deptOnly?: boolean;
  single?: boolean;
  rootDepartment?: Department;
  isUseArrayAPI?: boolean;
}

const OrgTreeV2 = (props: OrgTreeV2Props) => {
  const {
    search = false,
    orgConfig,
    isCheckbox = true,
    draggable = false,
    // selectedData,
    onChangeTreeData,
    onChangeSelectDept,
    onChangeSelectUser,
    single = false,
    userOnly = false,
    deptOnly = false,
    rootDepartment,
    sx,
    isUseArrayAPI = false,
  } = props;

  const [keyword, setKeyword] = useState<string>("");

  return (
    <OrgProvider
      orgConfig={orgConfig}
      isCheckbox={isCheckbox}
      // selectedData={selectedData}
      onChangeTreeData={onChangeTreeData}
      onChangeSelectDept={onChangeSelectDept}
      onChangeSelectUser={onChangeSelectUser}
      keyword={keyword}
      userOnly={userOnly}
      deptOnly={deptOnly}
      single={single}
    >
      {search ? (
        <Stack p={1.5} width={"100%"} height={"100%"} spacing={1}>
          <OrgSearch value={keyword} onChange={setKeyword} />
          <Box sx={{ flex: 1, overflowY: "auto", height: "calc(100% - 55px)" }}>
            <OrgTree
              draggable={draggable}
              keyword={keyword}
              sx={{ flex: 1 }}
              rootDepartment={rootDepartment}
            />
          </Box>
        </Stack>
      ) : (
        <Stack p={1.5} width={"100%"} height={"100%"} spacing={1}>
          <OrgTree draggable={draggable} rootDepartment={rootDepartment} />
        </Stack>
      )}
    </OrgProvider>
  );
};

export default OrgTreeV2;
