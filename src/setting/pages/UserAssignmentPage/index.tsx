import { Box, Typography } from "@mui/material";
import PageHeader from "base/components/PageHeader";
import { ManageAccounts } from "@mui/icons-material";
import Body from "./Body";

import { faker } from "@faker-js/faker";
import { IdName } from "types/common";
import { useGetCategoryList } from "setting/hooks/useCategory";
import { useEffect } from "react";

const generateData = (count: number): IdName[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
  }));
};
const list = generateData(30);

const UserAssignmentPage = () => {
  const { data, isLoading } = useGetCategoryList();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <Box>
      <PageHeader pageTitle="User Assignment" pageIcon={ManageAccounts} />
      <Body list={list} />
    </Box>
  );
};

export default UserAssignmentPage;
