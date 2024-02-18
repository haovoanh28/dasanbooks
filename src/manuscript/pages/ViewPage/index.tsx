import PageHeader from "base/components/PageHeader";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";
import { Description } from "@mui/icons-material";
import Toolbar from "./Toolbar";
import Header from "./Header";
import Body from "./Body";

import { faker } from "@faker-js/faker";
import { ManuscriptData } from "types/manuscripts/view";

const fakeData: ManuscriptData = {
  title: faker.lorem.words(3),
  type: {
    name: "Research Article",
  },
  created_on: faker.date.recent().toString(),
  attachments: [
    {
      id: faker.string.uuid(),
      name: faker.lorem.words(2),
    },
  ],
  category_name: "Category",
  comments: [
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      position: faker.name.jobTitle(),
      date: faker.date.recent().toString(),
      content: faker.lorem.paragraph(),
    },
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      position: faker.name.jobTitle(),
      date: faker.date.recent().toString(),
      content: faker.lorem.paragraph(),
    },
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      position: faker.name.jobTitle(),
      date: faker.date.recent().toString(),
      content: faker.lorem.paragraph(),
    },
  ],
  content: faker.lorem.paragraphs(3),
  creator_name: faker.person.fullName(),
  id: faker.string.uuid(),
  reviewers: [
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
    },
  ],
  status: "Submitted",
};

const ViewPage = () => {
  return (
    <Box>
      <PageHeader pageTitle="View Manuscript" pageIcon={Description} />
      <Card>
        <CardContent>
          <Toolbar mb={2} />

          <Box>
            <Header data={fakeData} />
            <Divider sx={{ my: 1 }} />
            <Body data={fakeData} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ViewPage;
