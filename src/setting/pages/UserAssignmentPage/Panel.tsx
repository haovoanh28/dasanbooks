import { useTheme, SxProps, Box, Typography, Paper } from "@mui/material";

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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.getContrastText(theme.palette.background.paper),
          height: 40,
          borderBottom: `1px solid ${theme.palette.divider}`,
          p: PADDING_FACTOR,
        }}
      >
        <Typography variant="h4">{title}</Typography>
        {rightActions && <Box>{rightActions}</Box>}
      </Box>

      <Paper
        elevation={1}
        sx={{ borderRadius: 1, overflow: "auto", height: "100%", ...sx }}
      >
        <Box
          sx={{
            p: PADDING_FACTOR,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.getContrastText(
              theme.palette.background.paper
            ),
          }}
        >
          {children}
        </Box>
      </Paper>
    </>
  );
}
