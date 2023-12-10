import { useAppSelector } from "store/hooks";

import { selectConversationAdressat } from "store/selectors/chat.selectors";

import * as UI from "./";
import { Stack, Typography } from "@mui/material";
import { Avatar } from "components/Chat/components/common";

type FeedWallStarterT = { loading: boolean };

const FeedWallStarter: React.FC<FeedWallStarterT> = ({ loading }) => {
  const adressat = useAppSelector(selectConversationAdressat);

  return loading ? (
    <UI.FeedWallStarterSkeleton />
  ) : (
    <Stack
      width="100%"
      alignItems="center"
      py={{ xs: 8, app_mobile: 15 }}
      gap={1}
    >
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
