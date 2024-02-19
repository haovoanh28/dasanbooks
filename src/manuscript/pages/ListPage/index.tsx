import PageHeader from "base/components/PageHeader";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Description } from "@mui/icons-material";
import Toolbar from "./Toolbar";
import AllManuscriptsDataTable from "./DataTable";
import NoData from "base/components/NoData";
import { useGetManuscriptList } from "manuscript/hooks/useManuscriptList";
import Loader from "base/components/Loader";

const ListPage = () => {
  const { data, isLoading } = useGetManuscriptList();

  console.log("data ==> ", data);

  return (
    <Box className="list-manuscript">
      <PageHeader pageTitle="All Manuscripts" pageIcon={Description} />
      <Card>
        <CardContent>
          <Toolbar />
          <Box sx={{ mt: 2 }}>
            {!data?.rows && isLoading && <Loader />}
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
