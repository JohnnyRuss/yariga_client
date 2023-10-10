import { Palette } from "@mui/material";

export default function generatePaletteColor(
  colorStr: string,
  palette: Palette
): string {
  const nestedStep = (value: string, index: number) => value.split(".")[index];

  const stepFirst =
    palette[nestedStep(colorStr, 0) as keyof typeof palette] || {};

  const color =
    (stepFirst[nestedStep(colorStr, 1) as keyof typeof stepFirst] as string) ||
    "";

  return color;
}
