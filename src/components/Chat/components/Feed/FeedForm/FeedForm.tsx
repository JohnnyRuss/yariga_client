/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useConversationQuery } from "hooks/api/chat";

import * as UI from "./";
import { Box, Stack, TextField, InputAdornment } from "@mui/material";

import useFeedFormText from "./hooks/useFeedFormText";
import useImageUpload from "./hooks/useImageUpload";

type FeedFormT = {
  disabled: boolean;
};

const FeedForm: React.FC<FeedFormT> = ({ disabled }) => {
  const { conversationId } = useParams();
  const { sendMessage } = useConversationQuery();

  const { isUploadingImages, images, onImagesChange, onRemoveImage } =
    useImageUpload();

  const { handleBlur, onEmojiSelection, onTextChange, text, setText } =
    useFeedFormText();

  const onSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (isUploadingImages) return;

    const urlRegex = /(https?:\/\/[^\s]+)/g;

    if (!text || !conversationId) return;

    const links = text.match(urlRegex) || [];
    const imageAssets = images.map((image) => image.secure_url);

    sendMessage({
      params: { conversationId },
      data: { text, links, images: imageAssets },
    });

    setText("");
  };

  const onEnter = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    onSendMessage();
  }, []);

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
          imagesToUpload={images}
          onRemoveImage={onRemoveImage}
        />

        <UI.FeedFormTextField
          onEnter={onEnter}
          text={text}
          onTextChange={onTextChange}
          handleBlur={handleBlur}
          onEmojiSelection={onEmojiSelection}
          onImagesChange={onImagesChange}
          imagesCount={images.length}
          disabled={disabled}
          isUploadingImages={isUploadingImages}
        />
      </Stack>
    </Box>
  );
};

export default FeedForm;
