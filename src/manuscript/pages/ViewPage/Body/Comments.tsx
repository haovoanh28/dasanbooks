import {
  Box,
  Typography,
  Divider,
  Stack,
  SxProps,
  BoxProps,
} from "@mui/material";
import UserInformation from "base/components/UserInformation";
import BaseIconButton from "base/components/BaseIconButton";
import { Edit, MoreVert } from "@mui/icons-material";

import { ManuscriptCommentData } from "types/manuscripts/view";

interface CommentItemProps {
  comment: ManuscriptCommentData;
  containerProps: BoxProps;
}

const CommentItem = ({ comment, containerProps }: CommentItemProps) => {
  return (
    <Box {...containerProps}>
      <UserInformation
        mainInfo={`${comment.name}/${comment.position} `}
        subInfo={comment.date}
        content={comment.content}
        rightActions={
          <Box sx={{ display: "flex" }}>
            <BaseIconButton tooltip="Edit">
              <Edit fontSize="small" color="success" />
            </BaseIconButton>
            <BaseIconButton tooltip="More">
              <MoreVert fontSize="small" />
            </BaseIconButton>
          </Box>
        }
      />
    </Box>
  );
};

interface CommentListProps {
  commentList: ManuscriptCommentData[];
}

const CommentList = ({ commentList }: CommentListProps) => {
  return (
    <Box>
      <Typography variant="subtitle1">Comments</Typography>
      <Divider sx={{ mt: 0.5, mb: 2 }} />
      <Stack spacing={2}>
        {commentList.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            containerProps={{ sx: { mb: 1 } }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default CommentList;
