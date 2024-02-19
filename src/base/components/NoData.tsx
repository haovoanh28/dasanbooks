import { Box } from "@mui/material";
import { ReactComponent as NoDataSVG } from "base/assets/icons/no-data.svg";

const NoData = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <NoDataSVG width={360} />
    </Box>
  );
};

export default NoData;
