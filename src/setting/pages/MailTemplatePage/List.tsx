import { Box } from "@mui/material";
import ListItem from "./ListItem";

import { MailTemplateListItem } from "types/mail-template/list";

interface Props {
  list: MailTemplateListItem[];
}

const List = ({ list }: Props) => {
  return (
    <Box>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default List;
