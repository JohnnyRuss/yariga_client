import { useAppSelector } from "store/hooks";

import { selectConversationAdressat } from "store/selectors/chat.selectors";

import * as UI from "./";
import * as MuiStyled from "./Feed.styled";
import { Typography } from "@mui/material";
import { UserRoleChip, Avatar } from "components/Layouts";

type FeedWallStarterT = { loading: boolean };

const FeedWallStarter: React.FC<FeedWallStarterT> = ({ loading }) => {
  const adressat = useAppSelector(selectConversationAdressat);

  return loading ? (
    <UI.FeedWallStarterSkeleton />
  ) : (
    <MuiStyled.FeedWallStarter>
      <Avatar
        width="70px"
        src={adressat?.avatar || ""}
        alt={adressat?.username || ""}
        showBadge={adressat?.isOnline}
      />

      <Typography className="feed-wall--starter__username">
        {adressat?.username || "Unknown User"}
      </Typography>

      {adressat?.email && (
        <Typography className="feed-wall--starter__email">
          {adressat.email}
        </Typography>
      )}

      {adressat?.role && <UserRoleChip role={adressat.role || "USER"} />}

      <Typography className="feed-wall--starter__yariga">Yariga</Typography>
    </MuiStyled.FeedWallStarter>
  );
};

export default FeedWallStarter;
