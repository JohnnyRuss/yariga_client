import { PaletteColorOptions, PaletteColor } from "@mui/material/styles";

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
}
