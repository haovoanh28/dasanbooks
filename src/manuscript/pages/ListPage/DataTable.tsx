import { useNavigate } from "react-router-dom";
import { createColumnHelper } from "@tanstack/react-table";

import {
  Checkbox,
  Avatar,
  AvatarGroup,
  Typography,
  Box,
  Link,
} from "@mui/material";
import DataTable from "base/components/DataTable";
import UserInformation from "base/components/UserInformation";

import { ManuscriptListItemData } from "types/manuscripts/list";
import { MANUSCRIPT_URL } from "manuscript/constants";

interface Props {
  data: ManuscriptListItemData[] | undefined;
}

export default function AllManuscriptsDataTable({ data }: Props) {
  const navigate = useNavigate();

  if (!data) {
    return <Typography>No Data</Typography>;
  }

  const columnHelper = createColumnHelper<ManuscriptListItemData>();
  const columns = [
    {
      id: `select`,
      header: () => <Checkbox sx={{ width: 30 }} />,
      cell: () => <Checkbox sx={{ width: 30 }} onChange={(e) => {}} />,
    },
    columnHelper.accessor("category_name", {
      header: "분야",
      cell: (info) => <Typography>{info.getValue()}</Typography>,
    }),
    columnHelper.accessor("title", {
      header: "논문명",
      cell: (info) => (
        <Typography
          sx={{ cursor: "pointer" }}
          component={Link}
          onClick={() => {
            navigate(`/${MANUSCRIPT_URL}/${info.row.original.id}`);
          }}
        >
          {info.getValue()}
        </Typography>
      ),
    }),
    columnHelper.accessor("reviewers", {
      header: "Reviewers",
      cell: (info) => (
        <AvatarGroup max={5} sx={{ justifyContent: "start" }}>
          {info.getValue().map(({ id, name }) => (
            <Avatar key={`${info.row.original.id}-${id}`} alt={name} src="" />
          ))}
        </AvatarGroup>
      ),
    }),
    columnHelper.accessor("created_on", {
      header: "Created On",
      cell: (info) => <Typography>{info.getValue()}</Typography>,
    }),
    columnHelper.accessor("status", {
      header: "Status",
      cell: (info) => <Typography>{info.getValue()}</Typography>,
    }),
    columnHelper.accessor("type", {
      header: "Mail Type",
      cell: (info) => <Typography>{info.getValue().name}</Typography>,
    }),
  ];

  return <DataTable columns={columns} data={data} />;
}
