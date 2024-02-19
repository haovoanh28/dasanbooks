import { Box, Stack } from "@mui/material";
import SearchBar from "./SearchBar";
import BaseButton from "./BaseButton";
import BaseModal from "./BaseModal";
import BaseOrg from "./BaseOrg";
import { orgDepartmentConfig } from "./BaseOrg/utils";

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
      <Box sx={{ mt: 1 }}>
        <BaseOrg
          search
          orgConfig={orgDepartmentConfig}
          isCheckbox
          onChangeSelectUser={(data) => {
            console.log("user:", data);
          }}
          onChangeSelectDept={(data) => {
            console.log("dept:", data);
          }}
        />
      </Box>
    </BaseModal>
  );
}
