import { Box, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const Toolbar = () => {
  return (
    <Grid container alignItems={"center"} gap={3}>
      <Grid item xs={4}>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <InputLabel>검색 날짜</InputLabel>
          <Select displayEmpty sx={{ flex: 1 }}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <InputLabel>검색 날짜</InputLabel>
          <Box sx={{ display: "flex", gap: 1 }}>
            <DatePicker />
            <DatePicker />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Toolbar;