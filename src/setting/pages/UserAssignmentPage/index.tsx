import { Box, Typography } from "@mui/material";
import PageHeader from "base/components/PageHeader";
import { ManageAccounts } from "@mui/icons-material";
import Body from "./Body";

import { IdName } from "types/common";
import { useGetCategoryList } from "setting/hooks/useCategory";
import { useEffect, useState } from "react";

const UserAssignmentPage = () => {
  const [categoryList, setCategoryList] = useState<IdName[]>([]);

  const { data, isLoading } = useGetCategoryList();

  useEffect(() => {
    if (data && data?.rows) {
      setCategoryList(data?.rows);
    }
  }, [data]);

  return (
    <Box>
      <PageHeader pageTitle="User Assignment" pageIcon={ManageAccounts} />
      <Body list={categoryList} />
    </Box>
  );
};

export default UserAssignmentPage;
