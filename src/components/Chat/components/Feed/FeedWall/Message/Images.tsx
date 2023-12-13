import { Grid } from "@mui/material";
import SingleImage from "./SingleImage";
import DualImage from "./DualImage";
import MultipleImages from "./MultipleImages";

type ImagesT = {
  images: Array<string>;
  belongToActiveUser: boolean;
};

const Images: React.FC<ImagesT> = ({ images, belongToActiveUser }) => {
  const imagesLength = images.length;

  return (
    <Grid
      container
      width="100%"
      maxWidth="460px"
      spacing={1}
      justifyContent={belongToActiveUser ? "flex-end" : "flex-start"}
    >
      {imagesLength === 1 ? (
        <SingleImage image={images[0]} />
      ) : imagesLength === 2 ? (
        <DualImage images={images} />
      ) : (
        <MultipleImages images={images} />
      )}
    </Grid>
  );
};

export default Images;
