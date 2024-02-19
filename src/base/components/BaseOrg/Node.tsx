import {
  SyntheticEvent,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { NodeRendererProps } from "react-arborist";

import { CaretDownOutlined, CaretRightOutlined } from "@ant-design/icons";
import {
  Box,
  Checkbox,
  CircularProgress,
  Stack,
  SvgIconProps,
  Typography,
  useTheme,
} from "@mui/material";

import OrgContext from "./OrgContext";
import { Folder, Person } from "@mui/icons-material";

const ICON_WIDTH = 20;
const IconProps: SvgIconProps = {
  fontSize: "small",
  sx: { width: `${ICON_WIDTH}px`, height: `${ICON_WIDTH}px` },
};

const getNewTreeData = (treeData: any, curId: any, child: any) => {
  const loop = (data: any) => {
    return data.map((item: any) => {
      if (curId === item.id) {
        return {
          ...item,
          children: child,
        };
      } else {
        if (item.children && item.children.length > 0) {
          return {
            ...item,
            children: loop(item.children),
          };
        } else {
          return item;
        }
      }
    });
  };
  return loop(treeData);
};

const isCheckedAllChildren = (parent: any, selectedNodes: any[]) => {
  if (!parent || !selectedNodes) return false;
  const childrenKeyArr = selectedNodes.map((node: any) => {
    return node.data.id;
  });
  for (let child of parent?.children) {
    if (!childrenKeyArr.includes(child.id)) return false;
  }
  return true;
};

const selectOrDeselectAllChildren = (
  node: any,
  type: "deselect" | "selectMulti"
) => {
  if (node && node.children && node.children.length > 0) {
    node.children.forEach((child: any) => {
      child[type]();
      if (child.data.isFolder && child.children && child.children.length > 0) {
        selectOrDeselectAllChildren(child, type);
      }
    });
  }
};

const Node = (props: NodeRendererProps<any>) => {
  const { node, style, dragHandle, tree } = props;
  const { isLazy, children, key, id } = node.data;
  const theme = useTheme();
  const [enableLoadData, setEnableLoadData] = useState<boolean>(false);
  const inputRef: any = useRef(null);
  const {
    data: treeData,
    setData: setTreeData,
    orgCfg,
    isCheckbox,
    onChangeSelectDept,
    onChangeSelectUser,
    keyword = "",
    userOnly,
    deptOnly,
    single,
  } = useContext(OrgContext) || {};

  const hasChildren: boolean = node.data?.hasChildren || node.data?.isLazy;
  const departmentHasChildren: boolean =
    !!node.data?.children &&
    Array.isArray(node.data?.children) &&
    node.data?.children?.length > 0;
  const canSelect: boolean =
    typeof node.data?.canSelect === "boolean"
      ? node.data?.canSelect || false
      : true; // can set canSelect in getValue config

  const IconExpand = useMemo(() => {
    if (node.isOpen) {
      return <CaretDownOutlined style={{ color: theme.palette.grey[500] }} />;
    } else {
      return <CaretRightOutlined style={{ color: theme.palette.grey[500] }} />;
    }
  }, [node.isOpen]);

  const lazyLoad = () => {
    if (isLazy && ((children && children.length === 0) || !children)) {
      setEnableLoadData(true);
    }
  };

  const params = orgCfg?.expand.getParams(key, keyword, node.data);
  const queryKey = keyword ? [key, keyword] : [key];
  const { data, isLoading } = orgCfg?.expand.api(params, queryKey, {
    cacheTime: Infinity,
    enabled: enableLoadData,
  });

  useEffect(() => {
    if (enableLoadData && data && data.rows && data.rows.length > 0) {
      const nTreeData = getNewTreeData(
        [...treeData],
        id,
        orgCfg?.expand?.getValue
          ? orgCfg?.expand?.getValue(data.rows, node.data)
          : data.rows
      );
      setTreeData(nTreeData);
      setEnableLoadData(false);
      node.open();
    }
  }, [data, enableLoadData]);

  // auto checked if it is in checked list
  useEffect(() => {
    if (!single && node.parent?.isSelected) {
      node.selectMulti();
    }
  }, [node.parent?.isSelected]);

  const handleSingleCheck = (event: any) => {
    let depts: any = {};
    let users: any = {};

    if (!event.target.checked) {
      node.deselect();
    } else {
      node.select();
      if (node.data.isFolder) {
        depts[node.id] = node.data;
      } else {
        users[node.id] = node.data;
      }
    }

    onChangeSelectDept && onChangeSelectDept(depts);
    onChangeSelectUser && onChangeSelectUser(users);
  };

  const handleChecked = (event: any) => {
    event.stopPropagation();

    if (!event.target.checked) {
      node.deselect();
      if (node.parent && node.parent.level !== -1) {
        node.parent.deselect();
      }
      selectOrDeselectAllChildren(node, "deselect");
    } else {
      node.selectMulti();
      if (node.parent && node.parent.level !== -1) {
        if (
          isCheckedAllChildren(node.parent, tree.selectedNodes) &&
          !userOnly
        ) {
          node.parent.selectMulti();
        }
      }
      selectOrDeselectAllChildren(node, "selectMulti");
    }

    let depts: any = {};
    let users: any = {};
    tree.selectedNodes.forEach((node: any) => {
      if (node.data.isFolder) {
        depts[node.id] = node.data;
      } else {
        users[node.id] = node.data;
      }
    });
    onChangeSelectDept && onChangeSelectDept(depts);
    onChangeSelectUser && onChangeSelectUser(users);
  };

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      style={style}
      ref={dragHandle}
      onClick={(event: SyntheticEvent) => {
        event.stopPropagation();
      }}
    >
      {hasChildren || departmentHasChildren ? (
        <>
          {isLoading && enableLoadData && !departmentHasChildren ? (
            <Stack
              sx={{ width: "24px", height: "100%" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CircularProgress size={13} sx={{ lineHeight: 1 }} />
            </Stack>
          ) : (
            <Stack
              onClick={(event: SyntheticEvent) => {
                event.stopPropagation();
                node.isInternal && node.toggle();
                lazyLoad();
              }}
              sx={{ width: "24px", height: "100%", cursor: "pointer" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {IconExpand}
            </Stack>
          )}
        </>
      ) : (
        <Box sx={{ width: "24px", height: "100%" }}></Box>
      )}

      {isCheckbox &&
        !(userOnly && node.data.isFolder) &&
        !(deptOnly && !node.data.isFolder) &&
        node.data.id !== "root-favorites" && (
          <Box sx={{ p: "5px" }}>
            <Checkbox
              disabled={!canSelect || node.data?.unselectable}
              checked={tree.isSelected(id)}
              inputRef={inputRef}
              onClick={single ? handleSingleCheck : handleChecked}
              sx={{
                p: 0,
                mb: "3px",
                "&:hover": { bgcolor: "transparent" },
                "&.MuiCheckbox-root": {
                  width: "14px",
                  height: "14px",
                  "& .MuiBox-root": {
                    width: "14px",
                    height: "14px",
                    "& svg": {
                      width: "14px",
                      height: "14px",
                    },
                  },
                },
              }}
            />
          </Box>
        )}

      <Stack alignItems={"center"} sx={{ px: "5px", mb: "2px" }}>
        {node.data.isFolder ? (
          <Folder {...IconProps} sx={{ color: "#FAAD14" }} />
        ) : (
          <Person {...IconProps} sx={{ color: "#2F54EB" }} />
        )}
      </Stack>
      <Typography
        sx={{ pl: "5px", width: "65%", cursor: "pointer" }}
        onClick={() => {
          inputRef.current?.click();
        }}
        noWrap
      >
        {node.data?.name || node.data?.title}
      </Typography>
    </Stack>
  );
};

export default Node;
