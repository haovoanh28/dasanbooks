import { Box, Typography } from "@mui/material";
import FileItem from "base/components/FileItem";

import { ManuscriptAttachmentData } from "types/manuscripts/view";

interface Props {
  fileList: ManuscriptAttachmentData[];
}

export default function Attachments({ fileList }: Props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      {fileList.map((file) => (
        <FileItem key={file.store_name} name={file.real_name} />
      ))}
    </Box>
  );
}
