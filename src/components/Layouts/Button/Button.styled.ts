import { styled, Button as MuiButton } from "@mui/material";

interface ButtonProps {
  fullWidth?: boolean | null;
  background_color: string;
  text_color?: string;
}

export const Button = styled(MuiButton)<ButtonProps>(
  ({ background_color, text_color, fullWidth }) => ({
    flex: fullWidth ? 1 : "unset",
    padding: "6px 15px",
    width: fullWidth ? "100%" : "fit-content",
    minWidth: 130,
    backgroundColor: background_color,
    color: text_color,
    fontSize: 16,
    fontWeight: 600,
    gap: "10px",
    textTransform: "capitalize",

    "&:hover": {
      opacity: 0.9,
      background: background_color,
    },

    ":disabled": {
      opacity: 0.7,
      color: text_color,
    },
  })
);
