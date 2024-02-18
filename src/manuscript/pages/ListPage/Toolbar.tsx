import { useState } from "react";

import { Grid, Box, Typography } from "@mui/material";
import BaseIconButton from "base/components/BaseIconButton";
import SearchBar from "base/components/SearchBar";
import BaseButton from "base/components/BaseButton";
import FilterModal from "./FilterModal";
import {
  PersonAddAlt1,
  Email,
  Download,
  MoreHoriz,
  FilterAlt,
} from "@mui/icons-material";

export default function Toolbar() {
  const [openFilter, setOpenFilter] = useState(false);

  const ICONS = [
    {
      tooltip: "Add",
      icon: PersonAddAlt1,
    },
    {
      tooltip: "Email",
      icon: Email,
    },
    {
      tooltip: "Download",
      icon: Download,
    },
    {
      tooltip: "More",
      icon: MoreHoriz,
    },
  ];

  const onCloseFilter = () => setOpenFilter(false);

  return (
    <>
      <Grid container alignItems={"center"}>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", gap: 1 }}>
            {ICONS.map(({ icon: Icon, tooltip }) => (
              <BaseIconButton color="primary" key={tooltip} tooltip={tooltip}>
                <Icon />
              </BaseIconButton>
            ))}
          </Box>
        </Grid>
        <Grid item xs={8} container justifyContent={"flex-end"} gap={1}>
          <SearchBar />
          <Box sx={{ display: "flex", gap: 1 }}>
            <BaseButton
              variant="outlined"
              color="primary"
              startIcon={<FilterAlt />}
              onClick={() => setOpenFilter(true)}
              sx={{ height: "100%" }}
            >
              Filter
            </BaseButton>
            <BaseButton
              variant="outlined"
              color="primary"
              startIcon={<Download />}
              sx={{ height: "100%" }}
            >
              Export
            </BaseButton>
          </Box>
        </Grid>
      </Grid>

      <FilterModal open={openFilter} onClose={onCloseFilter} />
    </>
  );
}
