import { useState } from "react";
import { useParams } from "react-router-dom";

import FileControl from "utils/FileControl";
import { useConversationQuery } from "hooks/api/chat";
import { MAX_IMAGE_COUNT_PER_SMS } from "config/constants";

import * as UI from "./";
import { Box, Stack, TextField, InputAdornment } from "@mui/material";

import { EmojiT } from "interface/components/common.types";

type FeedFormT = {
  disabled: boolean;
};

const FeedForm: React.FC<FeedFormT> = ({ disabled }) => {
  const { sendMessage } = useConversationQuery();

  const { conversationId } = useParams();

  const [text, setText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);

  // 1.0 Handle Text Change
  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value);

  // 1.1 Concat Icons With Text
  const getCursorPosition = (element: HTMLTextAreaElement): number =>
    element.selectionStart !== undefined ? element.selectionStart : 0;

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) =>
    setCursorPosition(getCursorPosition(event.target));

  const onEmojiSelection = (value: EmojiT): void => {
    const reg = new RegExp(`.{${cursorPosition}}`);
    setText((prev) => prev.replace(reg, (match) => match + value.native));
    setCursorPosition((prev) => prev + 2);
  };

  // 2.0 Handle Media Files
  const [imagesToUpload, setImagesToUpload] = useState<Array<string>>([]);
  const [isUploadingImages, setIsUploadingImages] = useState(false);

  const onImagesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (!files[0]) return;

    const limitLeft = MAX_IMAGE_COUNT_PER_SMS - imagesToUpload.length;

    const base64Strings = (
      await FileControl.convertMultipleFilesToBase64Str(files)
    )
      .filter((url) => !imagesToUpload.includes(url))
      .slice(0, limitLeft);

    setImagesToUpload((prev) => [...prev, ...base64Strings]);
  };

  const onRemoveImage = (src: string) => {
    setImagesToUpload((prev) => prev.filter((url) => url !== src));
  };

  // 3.0 Send Message
  const onSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();

    const urlRegex = /(https?:\/\/[^\s]+)/g;

    if (!text || !conversationId) return;

    const links = text.match(urlRegex) || [];

    sendMessage({ params: { conversationId }, data: { text, links } });

    setText("");
  };

  const onEnter = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    onSendMessage();
  };

  return (
    <Box
      component="form"
      p={1}
      mt="auto"
      position="sticky"
      bottom={0}
      onSubmit={onSendMessage}
    >
      <Stack gap={1}>
        <UI.UploadImagesBar
          onRemoveImage={onRemoveImage}
          imagesToUpload={imagesToUpload}
        />

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
            disabled={disabled || isUploadingImages}
            inputProps={{ className: "custom_scrollbar" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <UI.FeedFormTextFieldActions
                    onImageChange={onImagesChange}
                    imagesCount={imagesToUpload.length}
                    onEmojiSelection={onEmojiSelection}
                    disabled={disabled || isUploadingImages}
                  />
                </InputAdornment>
              ),
            }}
          />

          <UI.SendMessageButton disabled={disabled} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default FeedForm;
