"use client";

import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/material";
import { Search } from "@mui/icons-material";

interface Props {
  sx?: SxProps;
}

export default function SearchBar({ sx }: Props) {
  return (
    <OutlinedInput
      sx={sx}
      placeholder="Enter search keyword"
      startAdornment={
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pr: 1,
          }}
        >
          <Search color="primary" />
        </Box>
      }
    />
  );
}
