import { useMessengerContext } from "providers/MessengerProvider";

import { Stack } from "@mui/material";

type FeedWallT = {};

const FeedWall: React.FC<FeedWallT> = () => {
  const { messages } = useMessengerContext();

  return (
    <Stack width="100%" gap={0.5}>
      {messages.map((message) => (
        <Stack
          key={message._id}
          maxWidth="75%"
          bgcolor={message.user === 1 ? "gray" : "royalblue"}
          color="#fff"
          ml={message.user === 1 ? "0" : "auto"}
          mr={message.user === 1 ? "auto" : "0"}
          p={1}
          borderRadius="10px"
        >
          {message.text}
        </Stack>
      ))}
    </Stack>
  );
};

export default FeedWall;
