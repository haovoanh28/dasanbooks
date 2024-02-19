import PageHeader from "base/components/PageHeader";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Description } from "@mui/icons-material";
import Toolbar from "./Toolbar";
import AllManuscriptsDataTable from "./DataTable";
import NoData from "base/components/NoData";
import { useGetManuscriptList } from "manuscript/hooks/useManuscriptList";

const ListPage = () => {
  const { data, isLoading } = useGetManuscriptList();

  // if (!data) {
  //   return <Box>Loading ...</Box>;
  // }

  console.log("data ==> ", data);

  return (
    <Box className="list-manuscript">
      <PageHeader pageTitle="All Manuscripts" pageIcon={Description} />
      <Card>
        <CardContent>
          <Toolbar />
          <Box sx={{ mt: 2 }}>
            {!data?.rows && isLoading && <Typography>Loading ....</Typography>}
            {!data?.rows && !isLoading && <NoData />}
            {data?.rows && !isLoading && (
              <AllManuscriptsDataTable data={data.rows} />
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ListPage;
