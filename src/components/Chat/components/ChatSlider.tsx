import { useAppSelector } from "store/hooks";

import { selectConversationMediaAssets } from "store/selectors/chat.selectors";

import { Modal, SliderModal } from "components/Layouts";
import { Box } from "@mui/material";

type ChatSliderT = {};

const ChatSlider: React.FC<ChatSliderT> = () => {
  const images = useAppSelector(selectConversationMediaAssets);

  return (
    // <Modal open={true} onClose={() => {}}>
    //   <Box
    //     sx={{
    //       padding: 2,
    //       backgroundColor: "app_text.light",
    //       borderRadius: "10px",
    //     }}
    //   >
    //     {/* <SliderView images={images} initialSlide={0} /> */}
    //   </Box>
    // </Modal>
    <SliderModal images={images} />
  );
};

export default ChatSlider;
