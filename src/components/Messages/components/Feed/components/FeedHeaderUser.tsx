import { useMessengerContext } from "providers/MessengerProvider";

import { Stack, Typography } from "@mui/material";
import Avatar from "../../common/Avatar";

type FeedHeaderUserT = {};

const FeedHeaderUser: React.FC<FeedHeaderUserT> = () => {
  const { activeConversation } = useMessengerContext();

  return (
    <Stack direction="row" gap={1}>
      <Avatar
        src={activeConversation?.avatar || ""}
        alt={activeConversation?.adressat || ""}
      />

      <Stack mt="4px">
        <Typography fontWeight={600}>
          {activeConversation?.adressat || ""}
        </Typography>

        <Typography
          fontSize={14}
          color="app_text.main"
          className="conversation-text"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          Active Now
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FeedHeaderUser;
