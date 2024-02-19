import { Box, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  timelineOppositeContentClasses,
} from "@mui/lab";
import UserInformation from "base/components/UserInformation";

import { faker } from "@faker-js/faker";

import { ActivityListItem } from "types/activity/list";

const ACTIVITIES_DATA: ActivityListItem[] = Array.from({ length: 5 }).map(
  (_, index) => ({
    id: faker.string.uuid(),
    created_on:
      faker.date.anytime().toLocaleDateString() +
      " " +
      faker.date.anytime().toLocaleTimeString(),
    // time: faker.date.recent().toLocaleTimeString(),
    creator_name: faker.person.firstName() + " " + faker.person.lastName(),
    action: "Update",
    title: faker.lorem.sentence(),
    change: {
      status: "Analyst",
    },
    data: {
      status: "Backlog",
    },
  })
);

const Activities = () => {
  const activityList = {
    rows: ACTIVITIES_DATA,
  };

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        최신 활동
      </Typography>

      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineOppositeContent sx={{ display: "none" }} />
        {activityList.rows.map((activity) => (
          <TimelineItem key={activity.id}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="text.secondary">
                {activity.created_on}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <UserInformation
                mainInfo={activity.creator_name}
                subInfo={activity.data.status}
              />
              <Typography variant="body2" sx={{ my: 1 }}>
                {activity.title}
              </Typography>
              <Box>
                <Typography>상태 변경: Backlog 에서 Analyst</Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};

export default Activities;
