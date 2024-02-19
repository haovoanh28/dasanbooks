import { Box, CircularProgress, SxProps } from "@mui/material";
import { DRAWER_WIDTH } from "base/constant/ui";

interface Props {
  type?: "page" | "component";
}

const Loader = ({ type = "component" }: Props) => {
  const pageLoaderStyles: SxProps = {
    position: "fixed",
    top: "50%",
    left: `calc(50% + ${DRAWER_WIDTH / 2}px)`,
    transform: "translate(-50%, -50%)",
  };
  const componentLoaderStyles: SxProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Box
      className="loader-wrapper"
      sx={type === "page" ? pageLoaderStyles : componentLoaderStyles}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
