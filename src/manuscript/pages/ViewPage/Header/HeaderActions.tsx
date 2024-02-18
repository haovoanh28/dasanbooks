import { useState } from "react";
import useConfirm from "base/hooks/useConfirm";

import Box from "@mui/material/Box";
import BaseButton from "base/components/BaseButton";
import ProcessModal from "./ProcessModal";

import {
  CheckCircleOutline,
  HighlightOff,
  ErrorOutline,
} from "@mui/icons-material";

interface Props {}

export default function HeaderActions({}: Props) {
  const [ConfirmModal, showModal] = useConfirm();
  const [open, setOpen] = useState(false);

  const onClickReject = () => {
    showModal().then((res) => {
      // Handle reject
    });
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 1 }}>
        <BaseButton
          variant="contained"
          color="primary"
          startIcon={<CheckCircleOutline />}
          onClick={() => {
            setOpen(true);
            console.log("Yes");
          }}
        >
          진행
        </BaseButton>
        <BaseButton
          variant="outlined"
          color="error"
          startIcon={<HighlightOff />}
          onClick={onClickReject}
        >
          반려
        </BaseButton>
      </Box>

      <ProcessModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />

      <ConfirmModal />
    </>
  );
}
