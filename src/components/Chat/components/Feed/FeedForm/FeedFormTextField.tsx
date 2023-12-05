import { memo } from "react";

import * as UI from "./";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { EmojiT } from "interface/components/common.types";

type FeedFormTextFieldT = {
  text: string;
  disabled: boolean;
  imagesCount: number;
  isUploadingImages: boolean;
  onEnter: (e: React.KeyboardEvent) => void;
  onEmojiSelection: (value: EmojiT) => void;
  onImagesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
};

const FeedFormTextField: React.FC<FeedFormTextFieldT> = ({
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
  console.log("runs feed form");

  return (
    <Stack alignItems="center" width="100%" direction="row" gap={1}>
      <TextField
        placeholder="write message"
        multiline={true}
        minRows={1}
        maxRows={4}
        fullWidth
        autoFocus={true}
        value={text}
        onChange={onTextChange}
        onBlur={handleBlur}
        onKeyDown={onEnter}
        disabled={disabled}
        inputProps={{ className: "custom_scrollbar" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <UI.FeedFormTextFieldActions
                disabled={disabled}
                onImageChange={onImagesChange}
                imagesCount={imagesCount}
                onEmojiSelection={onEmojiSelection}
                isUploadingImages={isUploadingImages}
              />
            </InputAdornment>
          ),
        }}
      />

      <UI.SendMessageButton disabled={disabled || isUploadingImages} />
    </Stack>
  );
};

export default memo(FeedFormTextField);
