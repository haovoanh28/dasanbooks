// material-ui
import { CheckOutlined, MinusOutlined } from '@ant-design/icons';

import { Box, CheckboxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

// project import
import { ExtendedStyleProps } from 'types/theme/extended';
import getColors from 'base/utils/getColors';

// ==============================|| RADIO - COLORS ||============================== //

function getColorStyle({ color, theme }: ExtendedStyleProps) {
  const colors = getColors(theme, color);
  const { lighter, main, dark } = colors;

  return {
    '&:hover': {
      backgroundColor: 'transparent',
      '& .icon': {
        borderColor: main
      }
    },
    '&.Mui-focusVisible': {
      outline: `2px solid ${dark}`,
      outlineOffset: -4
    }
  };
}

// ==============================|| CHECKBOX - SIZE STYLE ||============================== //

interface CheckboxSizeProps {
  size: number;
  fontSize: number;
  position: number;
}

function getSizeStyle(size?: CheckboxProps['size']): CheckboxSizeProps {
  switch (size) {
    case 'small':
      return { size: 16, fontSize: 1, position: 1 };
    case 'large':
      return { size: 24, fontSize: 1.6, position: 2 };
    case 'medium':
    default:
      return { size: 20, fontSize: 1.35, position: 2 };
  }
}

// ==============================|| CHECKBOX - STYLE ||============================== //

function checkboxStyle(size?: CheckboxProps['size']) {
  const sizes: CheckboxSizeProps = getSizeStyle(size);

  return {
    '& .icon': {
      width: sizes.size,
      height: sizes.size,
      '& .filled': {
        fontSize: `${sizes.fontSize}rem`,
        top: -sizes.position,
        left: -sizes.position
      }
    }
  };
}

// ==============================|| OVERRIDES - CHECKBOX ||============================== //

export default function Checkbox(theme: Theme) {
  const { palette } = theme;

  return {
    MuiCheckbox: {
      defaultProps: {
        className: 'size-small',
        icon: (
          <Box
            className="icon"
            sx={{
              width: 16,
              height: 16,
              border: '1px solid',
              borderColor: 'inherit',
              borderRadius: 0.5,
              '&:hover': {
                borderColor: palette.secondary.main
              }
            }}
          />
        ),
        checkedIcon: (
          <Box
            className="icon"
            sx={{
              width: 16,
              height: 16,
              border: '1px solid',
              borderColor: 'inherit',
              borderRadius: 0.5,
              bgcolor: palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&:hover': {
                borderColor: palette.secondary.main
              }
            }}
          >
            <CheckOutlined width={'0.75rem'} height={'0.75rem'} color={palette.common.white} />
          </Box>
        ),
        indeterminateIcon: (
          <Box
            className="icon"
            sx={{
              width: 16,
              height: 16,
              border: '1px solid',
              borderColor: 'inherit',
              borderRadius: 0.5,
              bgcolor: palette.primary.main,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '&:hover': {
                borderColor: palette.secondary.main
              }
            }}
          >
            <MinusOutlined width={'0.75rem'} height={'0.75rem'} color={palette.common.white} />
          </Box>
        )
      },
      styleOverrides: {
        root: {
          '&.Mui-disabled .icon': {
            backgroundColor: theme.palette.secondary.light,
            borderColor: theme.palette.secondary.light,
            '& svg': {
              stroke: theme.palette.secondary.main,
              strokeWidth: 3
            }
          },
          borderRadius: 0,
          color: palette.text.secondary,
          '&.size-small': {
            ...checkboxStyle('small')
          },
          '&.size-medium': {
            ...checkboxStyle('medium')
          },
          '&.size-large': {
            ...checkboxStyle('large')
          }
        },
        colorPrimary: getColorStyle({ color: 'primary', theme }),
        colorSecondary: getColorStyle({ color: 'secondary', theme }),
        colorSuccess: getColorStyle({ color: 'success', theme }),
        colorWarning: getColorStyle({ color: 'warning', theme }),
        colorInfo: getColorStyle({ color: 'info', theme }),
        colorError: getColorStyle({ color: 'error', theme })
      }
    }
  };
}
