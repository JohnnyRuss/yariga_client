import { useConversationQuery } from "hooks/api/chat";

import { Button } from "@mui/material";
import { Message } from "@mui/icons-material";

type ChatWithButtonT = {
  adressatId: string;
  adressatName: string;
};

const ChatWithButton: React.FC<ChatWithButtonT> = ({
  adressatId,
  adressatName,
}) => {
  const { createConversationAndGetAll } = useConversationQuery();

  const onStartConversation = () => {
    if (!adressatId) return;
    createConversationAndGetAll({ args:{adressat: adressatId },load:true});
  };

  return (
    <Button
      variant="contained"
      fullWidth
      startIcon={<Message />}
      onClick={onStartConversation}
      sx={{ padding: "10px 15px", maxWidth: "100%" }}
    >
      Chat with {adressatName.split(" ")[0]}
    </Button>
  );
};

export default ChatWithButton;
