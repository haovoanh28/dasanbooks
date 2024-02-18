import {
  Typography,
  useTheme,
  Box,
  Modal,
  Backdrop,
  Fade,
  SxProps,
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
  borderRadius: 2,
  overflow: "hidden",
};
export default function BaseModal({
  open,
  onClose,
  title,
  size = "md",
  footer,
  children,
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
        <Box sx={{ ...MODAL_WRAPPER_STYLES, width: MODAL_WIDTH_MAP[size] }}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.getContrastText(
                theme.palette.background.paper
              ),
              padding: PADDING_FACTOR,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
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
        </Box>
      </Fade>
    </Modal>
  );
}
