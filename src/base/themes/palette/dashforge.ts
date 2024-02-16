import { PalettesProps } from '@ant-design/colors';
import { PaletteColorOptions, alpha } from '@mui/material/styles';

import { PaletteThemeProps } from 'types/theme/theme';

const DashForge = (colors: PalettesProps): PaletteThemeProps => {
  const { blue, red, gold, cyan, green, grey, magenta, purple, orange, yellow, lime, volcano } = colors;
  const greyColors: PaletteColorOptions = {
    0: grey[0],
    50: grey[1],
    100: grey[2],
    200: grey[3],
    300: grey[4],
    400: grey[5],
    500: grey[6],
    600: grey[7],
    700: grey[8],
    800: grey[9],
    900: grey[10],
    A50: grey[15],
    A100: grey[11],
    A200: grey[12],
    A400: grey[13],
    A700: grey[14],
    A800: grey[16]
  };
  const contrastText = '#fff';
  const disableColor = '#000';

  // lighter | light: disable
  // main: default
  // dark: hover
  // darker: active
  // contrastText: text color
  // disableColor: text color when disable

  return {
    primary: {
      lighter: '#cce1fe',
      light: '#b3d2fe',
      main: '#0168fa',
      dark: '#0158d5',
      darker: '#0153c8',
      contrastText,
      disableColor: contrastText
    },
    secondary: {
      lighter: '#f5f6fa', // item hover
      light: '#eef0f7', // item active
      main: '#8392A5',
      dark: '#8392A5', // icon color
      darker: '#525f76',
      contrastText,
      disableColor: contrastText
    },
    error: {
      lighter: '#f8d7da',
      light: '#f5c2c7',
      main: '#dc3545',
      dark: '#bb2d3b',
      darker: '#b02a37',
      contrastText,
      disableColor: contrastText
    },
    warning: {
      lighter: '#fff3cd',
      light: '#ffecb5',
      main: '#ffc107',
      dark: '#ffca2c',
      darker: '#ffcd39',
      contrastText: '#000',
      disableColor
    },
    info: {
      lighter: '#ccf1f6',
      light: '#b3eaf2',
      main: '#00b8d4',
      dark: '#26c3da',
      darker: '#33c6dd',
      contrastText: '#000',
      disableColor
    },
    success: {
      lighter: '#cee7d9',
      light: '#b6dbc6',
      main: '#0c8842',
      dark: '#0a7438',
      darker: '#0a6d35',
      contrastText,
      disableColor: contrastText
    },
    light: {
      lighter: '#eeeff4',
      light: '#e3e7ed',
      main: '#f4f5f8',
      dark: '#cfd0d3',
      darker: '#c3c4c6',
      contrastText: '#000',
      disableColor
    },
    dark: {
      lighter: '#97a3b9',
      light: '#8e9bb3',
      main: '#1c273c',
      dark: '#3e4759',
      darker: '#495263',
      contrastText,
      disableColor: contrastText
    },
    grey: greyColors,
    header: grey[2],
    link: blue[5],
    text: {
      primary: '#001737',
      secondary: '#8392A5',
      dark: '#1B2E4B',
      disabled: '#8392A5'
    }
  };
};

export default DashForge;
