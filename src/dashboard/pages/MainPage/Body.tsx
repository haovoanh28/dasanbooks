import { Box, Typography, Card, CardContent, Paper } from "@mui/material";
import TaskOverview from "./TaskOverview";
import TicketAssigned from "./TicketAssigned";
import Activities from "./Activities";

const PADDING_FACTOR = 2;
const Body = () => {
  return (
    <Box sx={{ display: "flex", gap: 3, mt: 2 }}>
      <Box sx={{ flexBasis: "45%" }}>
        <Paper sx={{ p: PADDING_FACTOR }}>
          <TaskOverview />
        </Paper>
        <Paper sx={{ p: PADDING_FACTOR, mt: 2 }}>
          <TicketAssigned />
        </Paper>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Paper sx={{ p: 2, height: "100%" }}>
          <Activities />
        </Paper>
      </Box>
    </Box>
  );
};

export default Body;
