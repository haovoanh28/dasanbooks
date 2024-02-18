import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material";

export interface BarData {
  text: string;
  value: number;
  color: string;
  percentage: number;
}

interface Props {
  data: BarData[];
}

export default function StaticBar({ data }: Props) {
  const containerStyles: SxProps = {
    display: "flex",
    //  alignItems: "center",
    width: "100%",
    height: "5px",
    borderRadius: "5px",
    overflow: "hidden",
  };
  const barStyles: SxProps = {
    height: "100%",
  };

  return (
    <Box sx={containerStyles}>
      {data.map((item) => (
        <Box
          sx={{
            ...barStyles,
            width: `${item.percentage}%`,
            backgroundColor: item.color,
          }}
        />
      ))}
    </Box>
  );
}
