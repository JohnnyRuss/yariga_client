import { Box } from "@mui/material";

type ImageElementT = {
  image: string;
};

const ImageElement: React.FC<ImageElementT> = ({ image }) => {
  return (
    <Box
      component="figure"
      width="100%"
      overflow="hidden"
      sx={{ aspectRatio: "1/1", borderRadius: "8px", cursor: "pointer" }}
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
  );
};

export default ImageElement;
