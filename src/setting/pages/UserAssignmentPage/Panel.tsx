import {
  useTheme,
  SxProps,
  Box,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

interface Props {
  title: string;
  children: React.ReactNode;
  sx?: SxProps;
  rightActions?: React.ReactNode;
}
const PADDING_FACTOR = 1.2;
export default function Panel({ title, sx, rightActions, children }: Props) {
  const theme = useTheme();

  return (
    <>
      <Paper
        elevation={1}
        sx={{ borderRadius: 1, overflow: "hidden", height: "100%", ...sx }}
      >
        <Stack height={"100%"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: theme.palette.text.dark,
              color: theme.palette.getContrastText(
                theme.palette.background.paper
              ),
              height: 55,
              // borderBottom: `1px solid ${theme.palette.divider}`,
              p: 2,
            }}
          >
            <Typography variant="h4" color={theme.palette.primary.contrastText}>
              {title}
            </Typography>
            {rightActions && <Box>{rightActions}</Box>}
          </Box>
          <Box
            className="scroll-box"
            sx={{
              height: "calc(100% - 55px)",
              p: 2,
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.getContrastText(
                theme.palette.background.paper
              ),
            }}
          >
            {children}
          </Box>
        </Stack>
      </Paper>
    </>
  );
}
