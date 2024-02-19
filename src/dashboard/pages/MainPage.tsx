import { Box, Typography } from "@mui/material";
import PageHeader from "base/components/PageHeader";
import { BarChart } from "@mui/icons-material";

const MainPage = () => {
  return (
    <Box>
      <PageHeader pageTitle="대시보드" pageIcon={BarChart} />
    </Box>
  );
};

export default MainPage;
