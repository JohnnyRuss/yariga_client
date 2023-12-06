import { Box } from "@mui/material";
import Text from "./Text";
import Images from "./Images";
import { LinkPreview } from "components/Layouts";

import { MessageT } from "interface/db/chat.types";

type MessageElT = {
  message: MessageT;
  belongToActiveUser: boolean;
};

const Message: React.FC<MessageElT> = ({ message, belongToActiveUser }) => {
  return (
    <>
      <Box
        sx={{ padding: message.text ? "5px 10px" : "0" }}
        maxWidth={message.links.length > 0 ? "320px" : "100%"}
        className={`msg-txt ${belongToActiveUser ? "active-user__msg" : ""}`}
      >
        {message.text && <Text text={message.text} />}

        {message.links[0] && !message.media[0] && (
          <LinkPreview url={message.links[0]} />
        )}
      </Box>

      {message.media.length > 0 && <Images images={message.media} />}
    </>
  );
};

export default Message;
