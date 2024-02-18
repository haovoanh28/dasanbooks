import { Box, Typography } from "@mui/material";
import FileItem from "base/components/FileItem";

import { IdName } from "types/common";

interface Props {
  fileList: IdName[];
}

export default function Attachments({ fileList }: Props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      {fileList.map((file) => (
        <FileItem key={file.id} name={file.name} />
      ))}
    </Box>
  );
}
