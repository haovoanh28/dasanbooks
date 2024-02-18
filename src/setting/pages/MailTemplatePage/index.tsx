import { Box, Typography } from "@mui/material";
import { Email } from "@mui/icons-material";
import PageHeader from "base/components/PageHeader";
import List from "./List";

import { MailTemplateListItem } from "types/mail-template/list";

import { faker } from "@faker-js/faker";

const generateFakeMailTemplateListItem = (): MailTemplateListItem => {
  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.words(5),
    content: faker.lorem.paragraphs(2),
    created_on: faker.date.past().toISOString(),
  };
};

const listData = Array.from({ length: 10 }, () =>
  generateFakeMailTemplateListItem()
);

const MailTemplatePage = () => {
  return (
    <Box>
      <PageHeader pageTitle="Mail Template" pageIcon={Email} />
      <List list={listData} />
    </Box>
  );
};

export default MailTemplatePage;
