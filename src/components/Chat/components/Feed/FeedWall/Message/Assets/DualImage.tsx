import { nanoid } from "@reduxjs/toolkit";

import { Grid } from "@mui/material";
import ImageElement from "./ImageElement";

type DualImageT = {
  images: Array<string>;
};

const DualImage: React.FC<DualImageT> = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <Grid item xs={6} key={nanoid()}>
          <ImageElement image={image} />
        </Grid>
      ))}
    </>
  );
};

export default DualImage;
