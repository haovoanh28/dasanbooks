import { Box, Typography } from "@mui/material";
import { Refresh, SvgIconComponent, Add } from "@mui/icons-material";
import BaseButton from "./BaseButton";
import { PAGE_HEADER_ICON_STYLES, ROW_STYLES } from "base/constant/ui";

interface Props {
  pageTitle: string;
  pageIcon?: SvgIconComponent;
  onRefresh?: () => void;
  onAdd?: () => void;
}

export default function PageHeader({
  pageTitle,
  pageIcon: Icon,
  onRefresh,
  onAdd,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        my: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          left: Icon ? "-2px" : "-1px",
        }}
      >
        {Icon && <Icon fontSize="large" sx={{ mr: 2 }} />}
        <Typography variant="h3">{pageTitle}</Typography>
      </Box>

      <Box sx={ROW_STYLES}>
        {onRefresh && (
          <BaseButton
            variant="outlined"
            sx={PAGE_HEADER_ICON_STYLES}
            onClick={onRefresh}
          >
            <Refresh />
          </BaseButton>
        )}

        {onAdd && (
          <BaseButton
            variant="outlined"
            sx={PAGE_HEADER_ICON_STYLES}
            onClick={onAdd}
          >
            <Add />
          </BaseButton>
        )}
      </Box>
    </Box>
  );
}
