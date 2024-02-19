// material-ui
// eslint-disable-next-line
import * as Theme from "@mui/material/styles";

// project import
import { CustomShadowProps } from "@base/types/theme";

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: CustomShadowProps;
  }
  interface ThemeOptions {
    customShadows?: CustomShadowProps;
  }
  export interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    dark: string;
  }
}
