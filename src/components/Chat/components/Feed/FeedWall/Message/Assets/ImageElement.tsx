import { useChatGalleryContext } from "providers/chat/ChatGalleryProvider";
import { Box } from "@mui/material";
import * as MuiStyled from "../Message.styled";

type ImageElementT = {
  image: string;
};

const ImageElement: React.FC<ImageElementT> = ({ image }) => {
  const { onOpenConversationGallery } = useChatGalleryContext();

  const onOpenGallery = () => onOpenConversationGallery(image);

  return (
    <MuiStyled.Image onClick={onOpenGallery} className="image-placeholder">
      <Box
        component="img"
        className="image-el__img"
        src={image}
        alt={image}
        loading="lazy"
        title={image}
        width="100%"
        height="100%"
      />
    </MuiStyled.Image>
  );
};

export default ImageElement;
