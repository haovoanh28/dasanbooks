import {
  Avatar,
  Box,
  Stack,
  SxProps,
  Typography,
  useTheme,
} from "@mui/material";
import { getUserAvatarUrl } from "base/utils";

interface UserInfoProps {
  userCn?: number | string;
  userNo?: number | string;
  primaryText?: string;
  secondaryText?: string | React.ReactNode;
  hideAvatar?: boolean;
  isAnonymous?: boolean;
  sx?: SxProps;
  secondaryTextSx?: SxProps;
  boxSx?: SxProps;
}

// # Case 1 :
// primaryText: group/name (position)
// secondaryText: subText

// # Case 2
// primaryText: name (Position)
// secondaryText: Group

const UserInfo = (props: UserInfoProps) => {
  const {
    userCn,
    userNo,
    primaryText,
    secondaryText,
    hideAvatar = false,
    secondaryTextSx,
    sx,
    boxSx,
  } = props;

  const theme = useTheme();

  return (
    <Stack direction="row" alignItems="center" spacing={1.25} sx={sx}>
      {!hideAvatar && (
        <Avatar src={getUserAvatarUrl(userCn, userNo, 30, 30)} sizes="sm" />
      )}
      <Box sx={boxSx}>
        <Typography sx={{ fontWeight: 500 }}>{primaryText}</Typography>
        {secondaryText && typeof secondaryText === "string" ? (
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: 11,
              ...secondaryTextSx,
            }}
            dangerouslySetInnerHTML={{ __html: secondaryText }}
          />
        ) : (
          <>{secondaryText}</>
        )}
      </Box>
    </Stack>
  );
};

export default UserInfo;
