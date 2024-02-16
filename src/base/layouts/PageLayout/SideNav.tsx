import { memo } from "react";
import { Divider, Drawer, List, Typography, Box } from "@mui/material";
import NavLinks from "./NavLinks";

import { DRAWER_WIDTH } from "base/constant/ui";

const SideNav = () => {
  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          height: "auto",
          bottom: 0,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Logo and brand*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
        }}
      >
        <Typography variant="h5">다산콘텐츠</Typography>
      </Box>
      <Divider />

      {/* Menus */}
      <List disablePadding>
        <NavLinks />
      </List>
    </Drawer>
  );
};

export default memo(SideNav);
