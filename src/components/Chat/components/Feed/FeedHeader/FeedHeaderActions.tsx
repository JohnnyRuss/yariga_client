import * as UI from "./";
import { Stack } from "@mui/material";
import { ConversationOptions } from "components/Chat/components/common";

type FeedHeaderActionsT = {};

const FeedHeaderActions: React.FC<FeedHeaderActionsT> = () => {
  return (
    <Stack direction="row" gap={1} height="100%" alignItems="center">
      <UI.FeedHeaderActionTooltips />

      <ConversationOptions />
    </Stack>
  );
};

export default FeedHeaderActions;
