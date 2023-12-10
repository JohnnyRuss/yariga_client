import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

import { useChatGalleryContext } from "providers/chat/ChatGalleryProvider";
import { selectConversationMediaAssets } from "store/selectors/chat.selectors";

import { ImagesListSkeleton } from "./";
import { ImageListGridItem } from "./index.styled";
import { Grid, Box } from "@mui/material";

type ImagesListT = {
  conversationIsLoading: boolean;
};

const ImagesList: React.FC<ImagesListT> = ({ conversationIsLoading }) => {
  const { onOpenConversationGallery } = useChatGalleryContext();

  const assets = useAppSelector(selectConversationMediaAssets);

  return (
    <Box px={1} pr={0} width="100%" height="100%" className="custom_scrollbar">
      <Grid container width="100%" spacing={1} height="100%">
        {conversationIsLoading ? (
          <ImagesListSkeleton />
        ) : (
          assets.map((image) => (
            <ImageListGridItem item key={nanoid()}>
              <Box
                component="figure"
                width="100%"
                overflow="hidden"
                onClick={() => onOpenConversationGallery(image)}
                sx={{
                  aspectRatio: "1/1",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={image}
                  loading="lazy"
                  title={image}
                  width="100%"
                  height="100%"
                  sx={{ objectFit: "cover", maxWidth: "100%" }}
                />
              </Box>
            </ImageListGridItem>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default ImagesList;