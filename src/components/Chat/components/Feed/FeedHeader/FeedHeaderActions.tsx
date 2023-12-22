import { useParams } from "react-router-dom";

import * as UI from "./";
import * as MuiStyled from "./FeedHeader.styled";
import { ConversationOptions } from "components/Chat/components/common";

type FeedHeaderActionsT = {
  isRead: boolean;
};

const FeedHeaderActions: React.FC<FeedHeaderActionsT> = ({ isRead }) => {
  const { conversationId } = useParams();

  return (
    <MuiStyled.FeedHeaderActions>
      <UI.FeedHeaderActionTooltips />

      <ConversationOptions
        isRead={isRead}
        conversationId={conversationId || ""}
      />
    </MuiStyled.FeedHeaderActions>
  );
};

export default FeedHeaderActions;
