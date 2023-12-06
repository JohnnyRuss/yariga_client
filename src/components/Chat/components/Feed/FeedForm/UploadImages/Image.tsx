import { Box } from "@mui/material";

type ImageT = {
  src: string;
};

const Image: React.FC<ImageT> = ({ src }) => {
  return (
    <Box
      component="img"
      src={src}
      alt="test"
      width="100%"
      height="100%"
      loading="eager"
      sx={{ objectFit: "cover" }}
    />
  );
};

export default Image;
