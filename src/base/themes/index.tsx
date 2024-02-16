import { ReactNode } from "react";

import { CssBaseline, StyledEngineProvider } from "@mui/material";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider,
  Theme,
  TypographyVariantsOptions,
} from "@mui/material/styles";

import { CustomShadowProps } from "types/theme/theme";

import componentsOverride from "./overrides";
import createCustomTheme from "./customTheme";
import createCustomShadow from "./shadows";
import createCustomTypography from "./typography";

interface Props {
  children: ReactNode;
}

const ThemeCustomization = ({ children }: Props) => {
  const customTheme = createCustomTheme();
  const typographyTheme: TypographyVariantsOptions = createCustomTypography(
    "light",
    "'Roboto', sans-serif",
    customTheme
  );
  const shadowsTheme: CustomShadowProps = createCustomShadow(customTheme);
  const themeOptions: ThemeOptions = {
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1266,
        xl: 1440,
      },
    },
    mixins: {
      toolbar: {
        minHeight: 60,
        paddingTop: 8,
        paddingBottom: 8,
      },
    },
    palette: customTheme.palette,
    customShadows: shadowsTheme,
    typography: typographyTheme,
  };
  
  const finalTheme: Theme = createTheme(themeOptions);
  finalTheme.components = componentsOverride(finalTheme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={finalTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeCustomization;
