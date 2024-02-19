import {Box, Typography, Stack, Checkbox} from "@mui/material";

import { Folder, Person, ArrowRight, ArrowDropDown } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

import { NodeRendererProps } from "react-arborist";

interface Props<T> extends NodeRendererProps<T> {}

const ICON_WIDTH = 20;
const IconProps: SvgIconProps = {
  fontSize: "small",
  sx: { width: `${ICON_WIDTH}px`, height: `${ICON_WIDTH}px` },
};
export default function OrgNode<T extends { [key: string]: any }>({
  node,
  style,
  dragHandle,
}: Props<T>) {
  return (
    <Stack
      style={style}
      direction={"row"}
      alignItems={"center"}
      ref={dragHandle}
      onClick={(event) => {
        event.stopPropagation();
      }}
      spacing={1}
    >
      {node.children ? (
        <Stack
          sx={{ width: ICON_WIDTH, cursor: "pointer", pb: "2px" }}
          alignItems={"center"}
          onClick={() => {
            node.toggle();
          }}
        >
          {node.isClosed ? (
            <ArrowRight {...IconProps} />
          ) : (
            <ArrowDropDown {...IconProps} />
          )}
        </Stack>
      ) : (
        <Box sx={{ width: ICON_WIDTH }} />
      )}

      <Box sx={{ p: "6px" }}>
        <Checkbox
          sx={{
            p: 0,
            mb: "3px",
            ml: "3px",
            "&:hover": { bgcolor: "transparent" },
          }}
        />
      </Box>

      <Stack sx={{ pr: "6px" }} justifyContent={"center"} alignItems={"center"}>
        {node.level === 0 ? (
          <Folder {...IconProps} sx={{ color: "#FAAD14" }} />
        ) : (
          <Person {...IconProps} sx={{ color: "#2F54EB" }} />
        )}
      </Stack>

      <Typography variant="body2" sx={{ pt: 0.2 }}>
        {node.data.name}
      </Typography>
    </Stack>
  );
}
