import { useContext, useEffect, useRef } from "react";
import { Tree } from "react-arborist";

import { Box, CircularProgress, Stack, SxProps, useTheme } from "@mui/material";
import _ from "lodash";

import Node from "./Node";
import OrgContext from "./OrgContext";
import { Department } from "types/org";

export interface OrgTreeProps {
  draggable?: boolean;
  keyword?: string;
  sizes?: {
    rowHeight?: number;
    overscanCount?: number;
    width?: number | string;
    height?: number;
    indent?: number;
    paddingTop?: number;
    paddingBottom?: number;
    padding?: number;
  };
  sx?: SxProps;
  single?: boolean;
  rootDepartment?: Department;
}

const OrgTree = (props: OrgTreeProps) => {
  const {
    draggable,
    sizes,
    keyword = "",
    single = false,
    sx,
    rootDepartment,
  } = props;
  const theme = useTheme();
  const boxRef = useRef<any>(null);
  const treeRef = useRef<any>(null);
  const {
    data: treeData,
    setData: setTreeData,
    orgCfg,
    onMove,
    onChangeTreeData,
  } = useContext(OrgContext) || {};

  const params = orgCfg?.init?.getParams(keyword);
  const { data, isFetching }: any = orgCfg?.init?.api(params, [keyword]);

  useEffect(() => {
    if (data && data.rows) {
      const nTreeData = orgCfg?.init?.getValue
        ? orgCfg?.init?.getValue(data.rows)
        : data.rows;
      let addRootDepartment: any = {};
      if (rootDepartment) {
        addRootDepartment = { ...rootDepartment };
        addRootDepartment.children = nTreeData;
      }
      onChangeTreeData && onChangeTreeData(nTreeData);
      setTreeData(rootDepartment ? [addRootDepartment] : nTreeData);
    } else {
      setTreeData([]);
    }
  }, [data]);

  return (
    <Box
      ref={boxRef}
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        flex: 1,
        ...sx,
      }}
    >
      {treeData.length > 0 && (
        <Tree
          ref={treeRef}
          disableDrag={!draggable}
          selectionFollowsFocus={false}
          data={treeData}
          onMove={onMove}
          width={"100%"}
          height={boxRef?.current?.offsetHeight}
          padding={10}
          className="org-tree-v2"
          openByDefault={false}
          {...{ rowHeight: 32, ...sizes }}
        >
          {Node}
        </Tree>
      )}
      {isFetching && (
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress />
        </Stack>
      )}
    </Box>
  );
};

export default OrgTree;
