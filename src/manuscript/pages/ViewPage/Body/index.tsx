import { useState, useMemo } from "react";
import { Box, Typography, Tab, Tabs } from "@mui/material";
import TabPanel from "base/components/TabPanel";
import Overview from "./Overview";

import { ManuscriptData } from "types/manuscripts/view";

interface Props {
  data: ManuscriptData;
}

type TabValue = "overview" | "activity";
const Body = ({ data }: Props) => {
  const [activeTab, setActiveTab] = useState<TabValue>("overview");

  const handleChange = (event: React.SyntheticEvent, newValue: TabValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Tabs value={activeTab} onChange={handleChange}>
        <Tab label="Overview" value="overview" />
        <Tab label="Activity" value="activity" />
      </Tabs>

      <TabPanel value={"overview"} current={activeTab}>
        <Overview data={data} />
      </TabPanel>
      <TabPanel value={"activity"} current={activeTab}>
        {/* <Activity /> */}
        <Typography>Activity Tab</Typography>
      </TabPanel>
    </Box>
  );
};

export default Body;
