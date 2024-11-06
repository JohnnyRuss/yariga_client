import Images from "./Images";
import * as MuiStyled from "./Message.styled";
import { LineClamp, LinkPreview, Text } from "components/Layouts";

import { MessageT } from "interface/db/chat.types";

type MessageElT = {
  message: MessageT;
  belongToActiveUser: boolean;
};

const Message: React.FC<MessageElT> = ({ message, belongToActiveUser }) => {
  return (
    <>
      <MuiStyled.Message
        has_text={message.text ? "1" : "0"}
        is_multi_link={message.links.length > 0 ? "1" : "0"}
        className={`msg-txt ${belongToActiveUser ? "active-user__msg" : ""}`}
      >
        {message.text && <Text text={message.text} gap={0} />}

        {message.links[0] && !message.media[0] && (
          <LinkPreview url={message.links[0]} />
        )}
      </MuiStyled.Message>

      {message.media.length > 0 && (
        <Images
          images={message.media}
          belongToActiveUser={belongToActiveUser}
        />
      )}
    </>
  );
};

export default Message;
