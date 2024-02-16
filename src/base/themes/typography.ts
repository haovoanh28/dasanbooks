// material-ui
import { Theme, TypographyVariantsOptions } from '@mui/material/styles';

// types
import { FontFamily, ThemeMode } from 'types/theme/config';

// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

const Typography = (mode: ThemeMode, fontFamily: FontFamily, theme: Theme): TypographyVariantsOptions => ({
  htmlFontSize: 16,
  fontFamily,
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 600,
    fontSize: '2.375rem'
  },
  h2: {
    fontWeight: 600,
    fontSize: '1.875rem'
  },
  h3: {
    fontWeight: 600,
    fontSize: '1.313rem'
  },
  h4: {
    fontWeight: 600,
    fontSize: '0.875rem'
  },
  h5: {
    fontWeight: 600,
    fontSize: '0.813rem'
  },
  h6: {
    fontWeight: 500,
    fontSize: '0.625rem'
  },
  caption: {
    fontWeight: 500,
    fontSize: '0.75rem'
  },
  body1: {
    fontWeight: 400,
    fontSize: '0.8125rem'
  },
  body2: {
    fontWeight: 400,
    fontSize: '0.75rem'
  },
  subtitle1: {
    fontSize: '0.875rem',
    fontWeight: 600
  },
  subtitle2: {
    fontSize: '0.75rem',
    fontWeight: 600
  },
  overline: {
    lineHeight: 1.66
  },
  button: {
    textTransform: 'capitalize'
  }
});

export default Typography;
