import { Grid } from "@mui/material";
import ImageElement from "./ImageElement";

type SingleImageT = {
  image: string;
};

const SingleImage: React.FC<SingleImageT> = ({ image }) => {
  return (
    <Grid item xs={12}>
      <ImageElement image={image} />
    </Grid>
  );
};

export default SingleImage;
