import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BaseModal from "base/components/BaseModal";
import BaseButton from "base/components/BaseButton";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function FilterModal({ open, onClose }: Props) {
  const Footer = (
    <Box>
      <BaseButton onClick={onClose}>Cancel</BaseButton>
      <BaseButton>Save</BaseButton>
    </Box>
  );

  return (
    <BaseModal title="Filter" open={open} onClose={onClose} footer={Footer}>
      <Typography>Need UI for Filter</Typography>
    </BaseModal>
  );
}
