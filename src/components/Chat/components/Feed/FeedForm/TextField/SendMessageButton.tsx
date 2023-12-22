import { Send } from "@mui/icons-material";
import * as MuiStyled from "./TextField.styled";

type SendMessageButtonT = { disabled: boolean };

const SendMessageButton: React.FC<SendMessageButtonT> = ({ disabled }) => {
  return (
    <MuiStyled.SendMessageButton type="submit" disabled={disabled}>
      <Send className="send-message__btn" />
    </MuiStyled.SendMessageButton>
  );
};

export default SendMessageButton;
