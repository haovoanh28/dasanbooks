import { Box, Typography } from "@mui/material";
import Attachments from "./Attachments";
import CommentList from "./Comments";

import { ManuscriptData } from "types/manuscripts/view";

interface Props {
  data: ManuscriptData;
}

const Overview = ({ data }: Props) => {
  return (
    <Box>
      <Attachments fileList={data.attachments} />
      <Box sx={{ mt: 1 }}>
        <Typography>{data.content}</Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <CommentList commentList={data.comments} />
      </Box>
    </Box>
  );
};

export default Overview;
