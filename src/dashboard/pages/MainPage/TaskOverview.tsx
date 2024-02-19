import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const TaskOverview = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Task Overview
      </Typography>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </>
  );
};

export default TaskOverview;
