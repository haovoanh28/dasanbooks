import {
  Typography,
  useTheme,
  Box,
  Modal,
  Backdrop,
  Fade,
  SxProps,
  Divider,
  Stack,
} from "@mui/material";
import BaseIconButton from "./BaseIconButton";
import { Close } from "@mui/icons-material";

interface ModalSize {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}
interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  size?: keyof ModalSize;
  footer: React.ReactNode;
  children: React.ReactNode;
  modalHeight?: string | number;
}

const MODAL_WIDTH_MAP: ModalSize = {
  sm: 320,
  md: 480,
  lg: 640,
  xl: 960,
};
const PADDING_FACTOR = 1.2;
const MODAL_WRAPPER_STYLES: SxProps = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 1,
  overflow: "hidden",
};

export default function BaseModal({
  open,
  onClose,
  title,
  size = "md",
  footer,
  children,
  modalHeight,
}: Props) {
  const theme = useTheme();

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Stack
          sx={{
            ...MODAL_WRAPPER_STYLES,
            width: MODAL_WIDTH_MAP[size],
            height: modalHeight,
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.text.dark,
              color: theme.palette.primary.contrastText,
              padding: PADDING_FACTOR,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography variant="h4">{title}</Typography>
            <BaseIconButton
              sx={{ color: "white" }}
              size="small"
              onClick={onClose}
            >
              <Close fontSize="small" />
            </BaseIconButton>
          </Box>
          <Box
            sx={{
              padding: PADDING_FACTOR,
              bgcolor: "background.paper",
              width: "100%",
              flex: 1,
            }}
          >
            {children}
          </Box>

          {footer && (
            <>
              <Box
                sx={{
                  padding: PADDING_FACTOR,
                  bgcolor: "background.paper",
                  display: "flex",
                  justifyContent: "flex-end",
                  borderTop: `1px solid ${theme.palette.divider}`,
                }}
              >
                {footer}
              </Box>
            </>
          )}
        </Stack>
      </Fade>
    </Modal>
  );
}
