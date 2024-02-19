import { Box, Typography } from "@mui/material";
import PageHeader from "base/components/PageHeader";
import { ManageAccounts } from "@mui/icons-material";
import Body from "./Body";

import { faker } from "@faker-js/faker";
import { IdName } from "types/common";

const generateData = (count: number): IdName[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
  }));
};
const list = generateData(30);

const UserAssignmentPage = () => {
  return (
    <Box>
      <PageHeader pageTitle="User Assignment" pageIcon={ManageAccounts} />
      <Body list={list} />
    </Box>
  );
};

export default UserAssignmentPage;
