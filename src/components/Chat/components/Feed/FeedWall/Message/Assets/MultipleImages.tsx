import { nanoid } from "@reduxjs/toolkit";

import { Grid } from "@mui/material";
import ImageElement from "./ImageElement";

type MultipleImagesT = {
  images: Array<string>;
};

const MultipleImages: React.FC<MultipleImagesT> = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <Grid item xs={4} key={nanoid()}>
          <ImageElement image={image} />
        </Grid>
      ))}
    </>
  );
};

export default MultipleImages;
