import { PaletteColorOptions, PaletteColor } from "@mui/material/styles";

// type AppBreakpointsT = BreakpointOverrides & {
//   desktop_large: number;
// };

declare module "@mui/material/styles" {
  interface Theme {}

  interface Palette {
    app_blue?: PaletteColor;
    app_green?: PaletteColor;
    app_bg?: PaletteColor;
    app_text?: PaletteColor;
    error?: PaletteColor;
  }

  interface PaletteOptions {
    app_blue?: PaletteColorOptions;
    app_green?: PaletteColorOptions;
    app_bg?: PaletteColorOptions;
    app_text?: PaletteColorOptions;
    error?: PaletteColorOptions;
  }

  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    app_mobile: true; // adds the `mobile` breakpoint
    app_tablet: true;
    app_desktop: true;
    app_desktop_large: true;
  }
}
