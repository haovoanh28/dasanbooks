import {Box, Stack} from "@mui/material";
import SearchBar from "./SearchBar";
import BaseButton from "./BaseButton";
import BaseModal from "./BaseModal";
import BaseOrg from "./BaseOrg";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function OrgModal({ open, onClose }: Props) {
  const Footer = (
    <Stack direction="row" gap={1}>
      <BaseButton variant="outlined" onClick={onClose}>
        Cancel
      </BaseButton>
      <BaseButton variant="contained" color="primary">
        Save
      </BaseButton>
    </Stack>
  );

  return (
    <BaseModal
      title="Organization"
      open={open}
      onClose={onClose}
      size="md"
      footer={Footer}
    >
      <SearchBar sx={{ width: "100%" }} />
      <Box sx={{ mt: 1 }}>
        <BaseOrg />
      </Box>
    </BaseModal>
  );
}
