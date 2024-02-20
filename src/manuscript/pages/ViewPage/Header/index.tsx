import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import HeaderActions from "./HeaderActions";

import { ManuscriptData } from "types/manuscripts/view";

interface Props {
  data: ManuscriptData;
}

export default function Header({ data }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Typography variant="h3">{data.title}</Typography>
          <Chip label={data.status} color="info" />
        </Box>
        <Typography variant="body2" color="grey">
          Submitted On: {data.created_on}
        </Typography>
      </Box>

      <Box>
        <HeaderActions />
      </Box>
    </Box>
  );
}
