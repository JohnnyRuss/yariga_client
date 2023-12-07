import { Send } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type SendMessageButtonT = { disabled: boolean };

const SendMessageButton: React.FC<SendMessageButtonT> = ({ disabled }) => {
  return (
    <IconButton
      type="submit"
      disabled={disabled}
      sx={{
        color: "app_blue.light",
        marginTop: "auto",

        "&:disabled": {
          opacity: 0.5,
          pointerEvents: "none",
        },
      }}
    >
      <Send sx={{ fontSize: 42 }} />
    </IconButton>
  );
};

export default SendMessageButton;
