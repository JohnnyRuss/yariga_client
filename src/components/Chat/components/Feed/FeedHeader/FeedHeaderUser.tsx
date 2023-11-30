import { useAppSelector } from "store/hooks";
import { selectConversationAdressat } from "store/selectors/chat.selectors";

import { Stack, Typography } from "@mui/material";
import { Avatar } from "components/Chat/components/common";

type FeedHeaderUserT = {};

const FeedHeaderUser: React.FC<FeedHeaderUserT> = () => {
  const adressat = useAppSelector(selectConversationAdressat);

  return (
    <Stack direction="row" gap={1}>
      <Avatar src={adressat?.avatar || ""} alt={adressat?.username || ""} />

      <Stack mt="4px">
        <Typography fontWeight={600} textTransform="capitalize">
          {adressat?.username}
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
          {adressat?.email}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FeedHeaderUser;
