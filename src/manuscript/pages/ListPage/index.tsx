import PageHeader from "base/components/PageHeader";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Description } from "@mui/icons-material";

const ListPage = () => {
  return (
    <Box className="list-manuscript">
      <PageHeader pageTitle="All Manuscripts" pageIcon={Description} />
    </Box>
  );
};

export default ListPage;
