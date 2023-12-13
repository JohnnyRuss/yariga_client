import { nanoid } from "@reduxjs/toolkit";

import { Masonry } from "@mui/lab";
import { Box } from "@mui/material";

interface GalleryT {
  images: string[];
  onActivateSlider: (index: number) => void;
}

const Gallery: React.FC<GalleryT> = ({ images, onActivateSlider }) => {
  return (
    <Box
      sx={{
        width: "85vw",
        height: "85vh",
        overflowY: "auto",
        paddingRight: 2,
      }}
      className="custom_scrollbar"
    >
      <Masonry columns={{ xs: 2, md: 4 }} spacing={1}>
        {images.map((item, index) => (
          <figure key={nanoid()} className="image-placeholder">
            <img
              onClick={() => onActivateSlider(index)}
              srcSet={`${item}?w=162&auto=format&dpr=2 2x`}
              src={`${item}?w=162&auto=format`}
              alt={item}
              loading="lazy"
              style={{
                borderRadius: 4,
                display: "block",
                width: "100%",
                cursor: "pointer",
              }}
            />
          </figure>
        ))}
      </Masonry>
    </Box>
  );
};

export default Gallery;
