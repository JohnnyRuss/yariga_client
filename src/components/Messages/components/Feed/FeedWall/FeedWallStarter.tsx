import { useAppSelector } from "store/hooks";

import { selectConversationAdressat } from "store/selectors/chat.selectors";

import Avatar from "../../common/Avatar";
import { Stack, Typography } from "@mui/material";

type FeedWallStarterT = {};

const FeedWallStarter: React.FC<FeedWallStarterT> = () => {
  const adressat = useAppSelector(selectConversationAdressat);

  return (
    <Stack width="100%" alignItems="center" py={15} gap={1}>
      <Avatar
        src={adressat?.avatar || ""}
        alt={adressat?.username || ""}
        width="70px"
      />

      <Typography fontWeight={600} fontSize={20} textTransform="capitalize">
        {adressat?.username}
      </Typography>

      <Typography fontSize={14} color="app_text.main">
        {adressat?.email}
      </Typography>

      <Typography fontWeight={600} fontSize={16} color="app_text.main">
        Yariga
      </Typography>
    </Stack>
  );
};

export default FeedWallStarter;
