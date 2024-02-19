import { useMemo, useState, useEffect } from "react";
import { useTheme, Typography, Stack } from "@mui/material";
import BaseButton from "base/components/BaseButton";
import UserInformation from "base/components/UserInformation";
import BaseIconButton from "base/components/BaseIconButton";
import OrgModal from "base/components/OrgModal";
import Panel from "./Panel";

import { DeleteOutline, Add } from "@mui/icons-material";
import { IdName } from "types/common";
import UserInfo from "./UserInfo";

interface Props {
  data: IdName[] | undefined;
  isLoading: boolean;
}

export default function Reviewers({ data, isLoading }: Props) {
  const theme = useTheme();
  const [openOrg, setOpenOrg] = useState(false);

  useEffect(() => {
    console.log("data ==> ", data);
  }, [data]);

  const rightActions = useMemo(
    () => (
      <BaseButton
        startIcon={<Add />}
        color="secondary"
        sx={{
          color: theme.palette.primary.contrastText,
          "&:hover": {
            backgroundColor: "transparent",
            color: theme.palette.primary.contrastText,
          },
        }}
        onClick={() => setOpenOrg(true)}
      >
        Add
      </BaseButton>
    ),
    []
  );

  return (
    <>
      <Panel title="선택된 유저" rightActions={rightActions}>
        {!data && isLoading && <Typography>Loading ....</Typography>}
        {!data && !isLoading && <Typography>No Data</Typography>}
        {data && (
          <Stack spacing={2}>
            {data.map((user: any) => {
              const groupName = user.dept || user.group_name || "";
              const positionName = user.position_name || user.srank || "";

              return (
                <Stack
                  key={user.id}
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <UserInfo
                    userCn={user.cn}
                    userNo={user.no}
                    primaryText={user.name || user.user_name || ""}
                    secondaryText={`${groupName} ${
                      groupName && positionName ? "/" : ""
                    } ${positionName}`}
                  />
                  <BaseIconButton color="secondary">
                    <DeleteOutline fontSize="small" />
                  </BaseIconButton>
                </Stack>
              );
            })}
          </Stack>
        )}
      </Panel>

      <OrgModal open={openOrg} onClose={() => setOpenOrg(false)} />
    </>
  );
}
