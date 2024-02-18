import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, TextField } from "@mui/material";
import BaseButton from "base/components/BaseButton";
import BaseModal from "base/components/BaseModal";
import { ErrorOutline } from "@mui/icons-material";

import { DetailPageParams } from "types/page";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ProcessModal({ open, onClose }: Props) {
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const onChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const onClickApprove = () => {
    // approveManuscript({ id: id });
  };

  const Footer = useMemo(() => {
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <BaseButton variant="outlined" onClick={onClose}>
          Save & Send Mail
        </BaseButton>
        <BaseButton variant="contained" onClick={onClickApprove}>
          Save
        </BaseButton>
      </Box>
    );
  }, [comment]);

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      size="lg"
      title="Process"
      footer={Footer}
    >
      <Typography sx={{ mb: 1 }}>Comments</Typography>
      <TextField
        sx={{ width: "100%" }}
        multiline
        rows={5}
        value={comment}
        onChange={onChangeComment}
      />
      <Box
        sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1 }}
        color="warning.main"
      >
        <ErrorOutline fontSize="small" />
        <Typography variant="body2">
          Status will changed to Process after save
        </Typography>
      </Box>
    </BaseModal>
  );
}
