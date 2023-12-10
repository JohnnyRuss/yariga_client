import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useConversationQuery } from "hooks/api/chat";

import * as UI from "./";
import { Box, Stack } from "@mui/material";

import useFeedFormText from "./hooks/useFeedFormText";
import useImageUpload from "./hooks/useImageUpload";

type FeedFormT = {
  disabled: boolean;
};

const FeedForm: React.FC<FeedFormT> = ({ disabled }) => {
  const { conversationId } = useParams();
  const { sendMessage } = useConversationQuery();

  const {
    isUploadingImages,
    images,
    onImagesChange,
    onRemoveImage,
    cleanUpImages,
    imageUploadWarning,
    onCloseOverlappedImageSizeAlert,
  } = useImageUpload();

  const { handleBlur, onEmojiSelection, onTextChange, text, setText } =
    useFeedFormText();

  const onSendMessage = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault();

      if (isUploadingImages) return;

      const urlRegex = /(https?:\/\/[^\s]+)/g;

      if (!conversationId) return;

      const links = text.match(urlRegex) || [];
      const imageAssets = images.map((image) => image.secure_url);

      if (!text && !links[0] && !imageAssets[0]) return;

      sendMessage({
        params: { conversationId },
        data: { text, links, images: imageAssets },
      });

      cleanUpImages();

      setText("");
    },
    [
      text,
      images,
      setText,
      sendMessage,
      cleanUpImages,
      conversationId,
      isUploadingImages,
    ]
  );

  const onEnter = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Enter") return;
      e.preventDefault();

      onSendMessage();
    },
    [onSendMessage]
  );

  return (
    <>
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
            warning={imageUploadWarning}
            onCloseOverlappedImageSizeAlert={onCloseOverlappedImageSizeAlert}
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
    </>
  );
};

export default FeedForm;