import PageHeader from "base/components/PageHeader";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Description } from "@mui/icons-material";
import Toolbar from "./Toolbar";
import AllManuscriptsDataTable from "./DataTable";
import NoData from "base/components/NoData";
import { useGetManuscriptList } from "manuscript/hooks/useManuscript";
import Loader from "base/components/Loader";
import useAuth from "base/hooks/useAuth";

const ListPage = () => {
  const { isLoggedIn } = useAuth();
  const { data, isLoading } = useGetManuscriptList({ enabled: isLoggedIn });

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
