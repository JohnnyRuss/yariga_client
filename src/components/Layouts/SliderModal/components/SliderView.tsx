import { Box } from "@mui/material";
import { SwiperSlider } from "components/Layouts";

interface SliderViewT {
  images: string[];
  initialSlide?: number;
}

const SliderView: React.FC<SliderViewT> = ({ images, initialSlide }) => {
  return (
    <Box
      width={{ xs: "95vw", md: "85vw" }}
      height={{ xs: "90vh", md: "85vh" }}
      sx={{
        overflowY: "auto",
        paddingRight: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SwiperSlider images={images} initialSlide={initialSlide} />
    </Box>
  );
};

export default SliderView;
