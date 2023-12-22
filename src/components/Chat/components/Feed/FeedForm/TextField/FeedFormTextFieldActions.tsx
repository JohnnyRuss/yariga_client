import { MAX_IMAGE_COUNT_PER_SMS } from "config/config";

import * as UI from "./";
import * as MuiStyled from "./TextField.styled";
import { Image } from "@mui/icons-material";
import { Stack, Box } from "@mui/material";

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
    <MuiStyled.FeedFormTextFieldActions
      position="end"
      disabled_select_image={disabledSelectImage ? "1" : "0"}
    >
      <Stack className="messenger-actions__stack">
        <UI.EmojiPicker
          disabled={disabled}
          onEmojiSelection={onEmojiSelection}
        />

        <UI.ImageUploadTooltip isUploadingImages={isUploadingImages}>
          <Box
            component="label"
            htmlFor="send-image"
            className="messenger-actions__img-label"
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
        </UI.ImageUploadTooltip>
      </Stack>
    </MuiStyled.FeedFormTextFieldActions>
  );
};

export default FeedFormTextFieldActions;
