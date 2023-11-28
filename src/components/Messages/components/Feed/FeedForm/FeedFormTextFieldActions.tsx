import { Stack, Box } from "@mui/material";
import { Image } from "@mui/icons-material";
import EmojiPicker from "./EmojiPicker";

import { EmojiT } from "interface/components/common.types";

type FeedFormTextFieldActionsT = {
  onEmojiSelection: (value: EmojiT) => void;
};

const FeedFormTextFieldActions: React.FC<FeedFormTextFieldActionsT> = ({
  onEmojiSelection,
}) => {
  return (
    <Stack direction="row" gap={0.5} alignItems="center">
      <EmojiPicker onEmojiSelection={onEmojiSelection} />

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
