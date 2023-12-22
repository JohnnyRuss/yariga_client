import { useAppSelector } from "store/hooks";

import { selectConversationAdressat } from "store/selectors/chat.selectors";

import * as UI from "./";
import * as MuiStyled from "./Feed.styled";
import { Typography } from "@mui/material";
import { UserRoleChip } from "components/Layouts";
import { Avatar } from "components/Chat/components/common";

type FeedWallStarterT = { loading: boolean };

const FeedWallStarter: React.FC<FeedWallStarterT> = ({ loading }) => {
  const adressat = useAppSelector(selectConversationAdressat);

  return loading ? (
    <UI.FeedWallStarterSkeleton />
  ) : (
    <MuiStyled.FeedWallStarter>
      <Avatar src={adressat?.avatar} alt={adressat?.username} width="70px" />

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
