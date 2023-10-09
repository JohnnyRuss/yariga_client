import { PaletteColorOptions, PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {}

  interface Palette {
    app_blue?: PaletteColor;
    app_bg?: PaletteColor;
    app_text?: PaletteColor;
  }

  interface PaletteOptions {
    app_blue?: PaletteColorOptions;
    app_bg?: PaletteColorOptions;
    app_text?: PaletteColorOptions;
  }
}
