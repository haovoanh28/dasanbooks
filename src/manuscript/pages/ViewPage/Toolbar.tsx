import { useNavigate } from "react-router-dom";
import BaseButton from "base/components/BaseButton";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ArrowBack } from "@mui/icons-material";

import { MANUSCRIPT_URL } from "manuscript/constants";

interface Props extends BoxProps {}

export default function Toolbar({ ...props }: Props) {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(`/${MANUSCRIPT_URL}/all`);
  };

  return (
    <Box {...props}>
      <BaseButton
        variant="text"
        color="primary"
        startIcon={<ArrowBack />}
        onClick={onClickBtn}
      >
        <Typography>Back to List</Typography>
      </BaseButton>
    </Box>
  );
}
