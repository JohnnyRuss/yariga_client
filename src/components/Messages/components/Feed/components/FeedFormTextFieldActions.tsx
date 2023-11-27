import { Stack, Box } from "@mui/material";
import { Image } from "@mui/icons-material";
import EmojiPicker from "./EmojiPicker";

type FeedFormTextFieldActionsT = {};

const FeedFormTextFieldActions: React.FC<FeedFormTextFieldActionsT> = () => {
  return (
    <Stack direction="row" gap={0.5} alignItems="center">
      <EmojiPicker />

      <Box
        component="label"
        htmlFor="send-image"
        p="8px"
        borderRadius="100px"
        sx={{
          cursor: "pointer",
          display: "inline-flex",

          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        <Image />
        <input type="file" accept="image/*" hidden id="send-image" />
      </Box>
    </Stack>
  );
};

export default FeedFormTextFieldActions;
