import useConfirm from "base/hooks/useConfirm";

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import BaseIconButton from "base/components/BaseIconButton";
import BaseButton from "base/components/BaseButton";
import { ExpandMore, Edit, Delete, ChevronRight } from "@mui/icons-material";
import { MailTemplateListItem } from "types/mail-template/list";

interface Props {
  item: MailTemplateListItem;
}

const ListItem = ({ item }: Props) => {
  const [ConfirmModal, showModal] = useConfirm();

  const onClickDelete = () => {
    showModal().then((res) => {
      // Handle delete
      console.log("delete ==> ", res);
    });
  };

  return (
    <>
      <Accordion>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AccordionSummary expandIcon={<ChevronRight />} id="panel1-header">
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          {/* <Box>
          <BaseIconButton tooltip="Edit">
            <Edit fontSize="small" color="success" />
          </BaseIconButton>
          <BaseIconButton tooltip="Delete">
            <Delete fontSize="small" color="error" />
          </BaseIconButton>
        </Box> */}

          <Box>
            <BaseIconButton tooltip="Edit">
              <Edit fontSize="small" color="success" />
            </BaseIconButton>
            <BaseIconButton tooltip="Delete" onClick={onClickDelete}>
              <Delete fontSize="small" color="error" />
            </BaseIconButton>
          </Box>
        </Box>

        <AccordionDetails>{item.content}</AccordionDetails>
      </Accordion>

      <ConfirmModal />
    </>
  );
};

export default ListItem;
