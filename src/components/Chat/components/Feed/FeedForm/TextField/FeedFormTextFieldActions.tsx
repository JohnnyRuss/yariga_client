import { MAX_IMAGE_COUNT_PER_SMS } from "config/constants";

import * as UI from "./";
import { Image } from "@mui/icons-material";
import { Stack, Box, InputAdornment } from "@mui/material";

import { EmojiT } from "interface/components/common.types";

type FeedFormTextFieldActionsT = {
  disabled: boolean;
  imagesCount: number;
  isUploadingImages: boolean;
  onEmojiSelection: (value: EmojiT) => void;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FeedFormTextFieldActions: React.FC<FeedFormTextFieldActionsT> = ({
  disabled,
  imagesCount,
  onImageChange,
  onEmojiSelection,
  isUploadingImages,
}) => {
  const overLength = imagesCount >= MAX_IMAGE_COUNT_PER_SMS;

  const disabledSelectImage = disabled || overLength || isUploadingImages;

  return (
    <InputAdornment position="end">
      <Stack direction="row" gap={0.5} alignItems="center">
        <UI.EmojiPicker
          disabled={disabled}
          onEmojiSelection={onEmojiSelection}
        />

        <Box
          component="label"
          htmlFor="send-image"
          p="8px"
          borderRadius="100px"
          sx={{
            cursor: "pointer",
            display: "inline-flex",
            opacity: disabledSelectImage ? 0.5 : 1,

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
            disabled={disabledSelectImage}
          />
        </Box>
      </Stack>
    </InputAdornment>
  );
};

export default FeedFormTextFieldActions;
