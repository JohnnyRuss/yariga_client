import { IconButton, Stack } from "@mui/material";
import { Phone, VideoCall, MoreVert } from "@mui/icons-material";

type FeedHeaderActionsT = {};

const FeedHeaderActions: React.FC<FeedHeaderActionsT> = () => {
  return (
    <Stack direction="row" gap={1} height="100%" alignItems="center">
      <IconButton sx={{ width: "40px", height: "40px" }}>
        <Phone />
      </IconButton>

      <IconButton sx={{ width: "40px", height: "40px" }}>
        <VideoCall />
      </IconButton>

      <IconButton sx={{ marginLeft: 1, width: "40px", height: "40px" }}>
        <MoreVert />
      </IconButton>
    </Stack>
  );
};

export default FeedHeaderActions;
