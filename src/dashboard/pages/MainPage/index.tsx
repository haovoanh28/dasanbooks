import { Box, Typography, Card, CardContent } from "@mui/material";
import PageHeader from "base/components/PageHeader";
import { BarChart } from "@mui/icons-material";
import Toolbar from "./Toolbar";
import Body from "./Body";

const MainPage = () => {
  return (
    <Box>
      <PageHeader pageTitle="대시보드" pageIcon={BarChart} />
      <Card>
        <CardContent>
          <Toolbar />
          <Body />
        </CardContent>
      </Card>
    </Box>
  );
};

export default MainPage;
