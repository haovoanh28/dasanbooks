import { useParams } from "react-router-dom";
import { useGetManuscriptDetail } from "manuscript/hooks/useManuscript";

import PageHeader from "base/components/PageHeader";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";
import { Description } from "@mui/icons-material";
import Toolbar from "./Toolbar";
import Header from "./Header";
import Body from "./Body";
import Loader from "base/components/Loader";

import { DetailPageParams } from "types/page";

const ViewPage = () => {
  const { id } = useParams<DetailPageParams>();
  const { data, isLoading } = useGetManuscriptDetail(id);

  return (
    <Box>
      <PageHeader pageTitle="View Manuscript" pageIcon={Description} />
      <Card>
        <CardContent>
          <Toolbar mb={2} />
          {!data && isLoading && <Loader />}
          {data?.rows && (
            <Box>
              <Header data={data?.rows} />
              <Divider sx={{ my: 1 }} />
              <Body data={data?.rows} />
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ViewPage;
