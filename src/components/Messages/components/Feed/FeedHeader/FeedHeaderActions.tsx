import Options from "./Options";
import { Stack } from "@mui/material";
import FeedHeaderActionTooltips from "./FeedHeaderActionTooltips";

type FeedHeaderActionsT = {};

const FeedHeaderActions: React.FC<FeedHeaderActionsT> = () => {
  return (
    <Stack direction="row" gap={1} height="100%" alignItems="center">
      <FeedHeaderActionTooltips />

      <Options />
    </Stack>
  );
};

export default FeedHeaderActions;
