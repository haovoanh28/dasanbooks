// material-ui
import { Theme } from '@mui/material/styles';

import { ColorProps } from 'types/theme/extended';

// project import
import getColors from '@base/utils/getColors';
import getShadow from '@base/utils/getShadow';

// types
interface Props {
  variant: ColorProps;
  theme: Theme;
}

// ==============================|| OVERRIDES - INPUT BORDER & SHADOWS ||============================== //

function getColor({ variant, theme }: Props) {
  const colors = getColors(theme, variant);
  const { light } = colors;

  const shadows = getShadow(theme, `${variant}`);

  return {
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.divider
    },
    '&.Mui-focused': {
      // boxShadow: shadows,
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.palette.divider}`
      }
    }
  };
}

// ==============================|| OVERRIDES - OUTLINED INPUT ||============================== //

export default function OutlinedInput(theme: Theme) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '10.5px 14px 10.5px 12px'
        },
        notchedOutline: {
          borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.divider
        },
        root: {
          ...getColor({ variant: 'primary', theme }),
          '&.Mui-error': {
            ...getColor({ variant: 'error', theme })
          }
        },
        inputSizeSmall: {
          padding: '7.5px 8px 7.5px 12px'
        },
        inputMultiline: {
          padding: 0
        },
        colorSecondary: getColor({ variant: 'secondary', theme }),
        colorError: getColor({ variant: 'error', theme }),
        colorWarning: getColor({ variant: 'warning', theme }),
        colorInfo: getColor({ variant: 'info', theme }),
        colorSuccess: getColor({ variant: 'success', theme })
      }
    }
  };
}
