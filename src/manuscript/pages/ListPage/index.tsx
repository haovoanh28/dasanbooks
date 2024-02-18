import PageHeader from "base/components/PageHeader";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Description } from "@mui/icons-material";
import Toolbar from "./Toolbar";
import AllManuscriptsDataTable from "./DataTable";

const ListPage = () => {
  return (
    <Box className="list-manuscript">
      <PageHeader pageTitle="All Manuscripts" pageIcon={Description} />
      <Card>
        <CardContent>
          <Toolbar />
          <Box sx={{ mb: 2 }}>
            <AllManuscriptsDataTable data={undefined}/>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ListPage;
