import { useMessengerContext } from "providers/MessengerProvider";

import Avatar from "../../common/Avatar";
import { Stack, Typography } from "@mui/material";

type FeedWallStarterT = {};

const FeedWallStarter: React.FC<FeedWallStarterT> = () => {
  const { activeConversation } = useMessengerContext();

  return (
    <Stack width="100%" alignItems="center" py={15} gap={1}>
      <Avatar
        src={activeConversation?.avatar || ""}
        alt={activeConversation?.adressat || ""}
      />

      <Typography fontWeight={600}>
        {activeConversation?.adressat || ""}
      </Typography>

      <Typography fontWeight={600} fontSize={14} color="app_text.main">
        Yariga
      </Typography>
    </Stack>
  );
};

export default FeedWallStarter;
