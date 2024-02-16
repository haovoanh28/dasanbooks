// material-ui
import { Theme } from '@mui/material/styles';

// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //

export default function ListItemIcon(theme: Theme) {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 24,
          color: theme.palette.text.primary,
          '& svg': {
            width: 16,
              height: 16,
              color: theme.palette.secondary.dark,
              strokeWidth: 1.5
          }
        }
      }
    }
  };
}
