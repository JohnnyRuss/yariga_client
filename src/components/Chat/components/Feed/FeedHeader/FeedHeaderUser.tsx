import { useAppSelector } from "store/hooks";
import { selectConversationAdressat } from "store/selectors/chat.selectors";

import { Avatar } from "components/Layouts";
import * as MuiStyled from "./FeedHeader.styled";
import { Stack, Typography } from "@mui/material";

type FeedHeaderUserT = {};

const FeedHeaderUser: React.FC<FeedHeaderUserT> = () => {
  const adressat = useAppSelector(selectConversationAdressat);

  return (
    <MuiStyled.FeedHeaderUser>
      <Avatar
        width="50px"
        src={adressat?.avatar || ""}
        alt={adressat?.username || ""}
        showBadge={adressat?.isOnline}
      />

      <Stack className="header-user__content-stack">
        <Typography className="header-user__content-stack--username">
          {adressat?.username || "Unknown User"}
        </Typography>

        {adressat?.email && (
          <Typography className="conversation-text header-user__content-stack--email">
            {adressat.email}
          </Typography>
        )}
      </Stack>
    </MuiStyled.FeedHeaderUser>
  );
};

export default FeedHeaderUser;
