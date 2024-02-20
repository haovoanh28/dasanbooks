import { Box, Stack } from "@mui/material";
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
      modalHeight={"60%"}
    >
      <Box sx={{ height: "100%" }}>
        <BaseOrg
          search
          isCheckbox
          orgConfig={orgDepartmentConfig}
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
