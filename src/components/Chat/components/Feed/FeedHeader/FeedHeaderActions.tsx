import { useParams } from "react-router-dom";

import * as UI from "./";
import { Stack } from "@mui/material";
import { ConversationOptions } from "components/Chat/components/common";

type FeedHeaderActionsT = {
  isRead: boolean;
};

const FeedHeaderActions: React.FC<FeedHeaderActionsT> = ({ isRead }) => {
  const { conversationId } = useParams();

  return (
    <Stack direction="row" gap={1} height="100%" alignItems="center">
      <UI.FeedHeaderActionTooltips />

      <ConversationOptions
        isRead={isRead}
        conversationId={conversationId || ""}
      />
    </Stack>
  );
};

export default FeedHeaderActions;
