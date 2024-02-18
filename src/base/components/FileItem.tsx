import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { FileDownload } from "@mui/icons-material";

interface Props {
  name: string;
  size?: string | number;
  onClick?: () => void;
}

export default function FileItem({ name, size, onClick }: Props) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: 1 }}
      onClick={onClick}
    >
      <FileDownload fontSize="small" color="primary" />
      <Typography
        sx={{
          "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
            color: "primary.main",
          },
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}
