import { useAppSelector } from "store/hooks";
import { useChatGalleryContext } from "providers/chat/ChatGalleryProvider";

import { selectConversationMediaAssets } from "store/selectors/chat.selectors";

import { Modal, SliderView } from "components/Layouts";
import { Box } from "@mui/material";

const ChatSlider: React.FC = () => {
  const {
    conversationGalleryInitialIndex,
    setConversationGalleryInitialIndex,
  } = useChatGalleryContext();

  const images = useAppSelector(selectConversationMediaAssets);

  const onCloseGallery = () => setConversationGalleryInitialIndex(NaN);

  return (
    <Modal
      open={!isNaN(conversationGalleryInitialIndex)}
      onClose={onCloseGallery}
    >
      <Box
        sx={{
          padding: 2,
          borderRadius: "10px",
          backgroundColor: "app_text.light",
        }}
      >
        <SliderView
          images={images}
          initialSlide={conversationGalleryInitialIndex}
        />
      </Box>
    </Modal>
  );
};

export default ChatSlider;
