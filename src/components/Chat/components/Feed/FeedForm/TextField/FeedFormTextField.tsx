import { memo } from "react";

import * as UI from "./";
import { Stack, TextField } from "@mui/material";
import { EmojiT } from "interface/components/common.types";

type FeedFormTextFieldT = {
  text: string;
  disabled: boolean;
  imagesCount: number;
  isUploadingImages: boolean;
  onFocus: () => void;
  onEnter: (e: React.KeyboardEvent) => void;
  onEmojiSelection: (value: EmojiT) => void;
  onImagesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
};

const FeedFormTextField: React.FC<FeedFormTextFieldT> = ({
  onFocus,
  onEnter,
  text,
  onTextChange,
  handleBlur,
  onEmojiSelection,
  onImagesChange,
  imagesCount,
  disabled,
  isUploadingImages,
}) => {
  return (
    <Stack alignItems="center" width="100%" direction="row" gap={1}>
      <TextField
        placeholder="write message"
        multiline={true}
        minRows={1}
        maxRows={4}
        fullWidth
        autoFocus={true}
        onFocus={onFocus}
        value={text}
        onChange={onTextChange}
        onBlur={handleBlur}
        onKeyDown={onEnter}
        disabled={disabled}
        inputProps={{ className: "custom_scrollbar" }}
        InputProps={{
          endAdornment: (
            <UI.FeedFormTextFieldActions
              disabled={disabled}
              onImageChange={onImagesChange}
              imagesCount={imagesCount}
              onEmojiSelection={onEmojiSelection}
              isUploadingImages={isUploadingImages}
            />
          ),
        }}
      />

      <UI.ImageUploadTooltip isUploadingImages={isUploadingImages}>
        <UI.SendMessageButton disabled={disabled || isUploadingImages} />
      </UI.ImageUploadTooltip>
    </Stack>
  );
};

export default memo(FeedFormTextField);
