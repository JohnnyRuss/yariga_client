import { Send } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type SendMessageButtonT = { disabled: boolean };

const SendMessageButton: React.FC<SendMessageButtonT> = ({ disabled }) => {
  return (
    <IconButton
      type="submit"
      disabled={disabled}
      sx={{ color: "app_blue.light", marginTop: "auto" }}
    >
      <Send sx={{ fontSize: 42 }} />
    </IconButton>
  );
};

export default SendMessageButton;
