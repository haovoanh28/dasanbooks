import {
  presetDarkPalettes,
  presetPalettes,
  PalettesProps,
} from "@ant-design/colors";
import { alpha, createTheme } from "@mui/material/styles";
import DashForge from "./palette/dashforge";

import { PaletteThemeProps } from "types/theme/theme";

const createCustomTheme = () => {
  // Since we are not using dark mode now => hardcode the colors
  const colors = presetPalettes;

  let greyPrimary = [
    "#ffffff",
    "#fafafa",
    "#f5f5f5",
    "#f0f0f0",
    "#d9d9d9",
    "#bfbfbf",
    "#8c8c8c",
    "#595959",
    "#262626",
    "#141414",
    "#000000",
  ];
  let greyAscent = ["#fafafa", "#bfbfbf", "#434343", "#1f1f1f"];
  let greyConstant = ["#fafafb", "#e6ebf1"];
  colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

  const paletteColors: PaletteThemeProps = DashForge(colors);

  return createTheme({
    palette: {
      mode: "light",
      common: {
        black: "#000",
        white: "#fff",
      },
      ...paletteColors,
      text: {
        primary: paletteColors?.text?.primary,
        secondary: paletteColors?.text?.secondary,
        disabled: paletteColors?.text?.disabled,
        dark: paletteColors?.text?.dark,
      },
      action: {
        disabled: paletteColors.grey[300],
      },
      divider: alpha("#485E90", 0.16),
      background: {
        paper: paletteColors.grey[0],
        default: paletteColors.grey.A50,
      },
    },
  });
};

export default createCustomTheme;
