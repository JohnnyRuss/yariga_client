import { Button, styled, Palette, PaletteColor } from "@mui/material";

export const MuiButton = styled(Button)<{ bgcolor: string; textcolor: string }>(
  ({ theme, textcolor, bgcolor }) => {
    const textColorRootKey = textcolor.split(".")[0] as keyof Palette;
    const textColorRootColorKey = textcolor.split(".")[1] as keyof PaletteColor;

    const txt = theme.palette[textColorRootKey]
      ? (theme.palette[textColorRootKey] as PaletteColor)[textColorRootColorKey]
      : "";

    const bgColorRootKey = bgcolor.split(".")[0] as keyof Palette;
    const bgColorRootColorKey = bgcolor.split(".")[1] as keyof PaletteColor;

    const bg = theme.palette[bgColorRootKey]
      ? (theme.palette[bgColorRootKey] as PaletteColor)[bgColorRootColorKey]
      : "";

    return {
      padding: 0,
      maxWidth: "100%",
      color: txt,
      backgroundColor: bg,
      overflow: "hidden",
      borderRadius: "5px",

      "&:hover": {
        color: txt,
        backgroundColor: bg,
      },

      a: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "8px",
        height: "100%",
        width: "100%",
        padding: "10px 15px",
      },
    };
  }
);
