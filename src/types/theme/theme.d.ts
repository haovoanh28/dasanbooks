import {
  SimplePaletteColorOptions,
  PaletteColorOptions,
} from "@mui/material/styles";

export type PaletteThemeProps = {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  error: SimplePaletteColorOptions;
  warning: SimplePaletteColorOptions;
  info: SimplePaletteColorOptions;
  success: SimplePaletteColorOptions;
  grey: PaletteColorOptions;
  magenta?: SimplePaletteColorOptions;
  purple?: SimplePaletteColorOptions;
  orange?: SimplePaletteColorOptions;
  yellow?: SimplePaletteColorOptions;
  lime?: SimplePaletteColorOptions;
  volcano?: SimplePaletteColorOptions;
  light?: SimplePaletteColorOptions;
  dark?: SimplePaletteColorOptions;
  header: string;
  link: string;
  text?: {
    primary: string;
    secondary: string;
    dark: string;
    disabled: string;
  };
};

export type CustomShadowProps = {
  button: string;
  text: string;
  z1: string;
  primary: string;
  primaryButton: string;
  secondary: string;
  secondaryButton: string;
  error: string;
  errorButton: string;
  warning: string;
  warningButton: string;
  info: string;
  infoButton: string;
  success: string;
  successButton: string;
  grey: string;
  greyButton: string;
};
