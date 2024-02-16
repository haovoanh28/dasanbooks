// material-ui
import { Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

// ==============================|| OVERRIDES - TABLE ROW ||============================== //

export default function Table(theme: Theme) {

  return {
    MuiTable: {
      styleOverrides: {
        root: {
          boxShadow: `0px 2px 25px 0px ${alpha(theme.palette.common.black, 0.05)}`
        }
      }
    }
  };
}
