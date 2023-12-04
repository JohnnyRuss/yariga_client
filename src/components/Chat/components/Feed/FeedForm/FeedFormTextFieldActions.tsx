import { MAX_IMAGE_COUNT_PER_SMS } from "config/constants";

import * as UI from "./";
import { Stack, Box } from "@mui/material";
import { Image } from "@mui/icons-material";

import { EmojiT } from "interface/components/common.types";

type FeedFormTextFieldActionsT = {
  disabled: boolean;
  imagesCount: number;
  onEmojiSelection: (value: EmojiT) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FeedFormTextFieldActions: React.FC<FeedFormTextFieldActionsT> = ({
  disabled,
  imagesCount,
  onImageChange,
  onEmojiSelection,
}) => {
  const overLength = imagesCount >= MAX_IMAGE_COUNT_PER_SMS;

  return (
    <Stack direction="row" gap={0.5} alignItems="center">
      <UI.EmojiPicker disabled={disabled} onEmojiSelection={onEmojiSelection} />

      <Box
        component="label"
        htmlFor="send-image"
        p="8px"
        borderRadius="100px"
        sx={{
          cursor: "pointer",
          display: "inline-flex",
          opacity: disabled || overLength ? 0.5 : 1,

          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        <Image />
        <input
          hidden
          type="file"
          accept="image/*"
          multiple={true}
          id="send-image"
          onChange={onImageChange}
          disabled={disabled || overLength}
        />
      </Box>
    </Stack>
  );
};

export default FeedFormTextFieldActions;
