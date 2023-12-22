import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

import { useChatGalleryContext } from "providers/chat/ChatGalleryProvider";
import { selectConversationMediaAssets } from "store/selectors/chat.selectors";

import { ImagesListSkeleton } from "./";
import * as MuiStyled from "./index.styled";
import { Grid, Box } from "@mui/material";
import { NoContentMessage } from "components/Layouts";

type ImagesListT = {
  conversationIsLoading: boolean;
};

const ImagesList: React.FC<ImagesListT> = ({ conversationIsLoading }) => {
  const { onOpenConversationGallery } = useChatGalleryContext();

  const assets = useAppSelector(selectConversationMediaAssets);

  return (
    <MuiStyled.ImagesList className="custom_scrollbar">
      <Grid container width="100%" spacing={1}>
        {conversationIsLoading ? (
          <ImagesListSkeleton />
        ) : assets.length > 0 ? (
          assets.map((image) => (
            <Grid
              item
              key={nanoid()}
              className="conversation-panel__images-list__grid-item"
            >
              <Box
                component="figure"
                onClick={() => onOpenConversationGallery(image)}
                className="conversation-panel__images-list__grid-item--fig"
              >
                <Box
                  component="img"
                  src={image}
                  alt={image}
                  loading="lazy"
                  title={image}
                  width="100%"
                  height="100%"
                />
              </Box>
            </Grid>
          ))
        ) : (
          <NoContentMessage message="There are no shared media files in conversation" />
        )}
      </Grid>
    </MuiStyled.ImagesList>
  );
};

export default ImagesList;
