import { useAppSelector } from "store/hooks";

import { selectRelatedProperties } from "store/selectors/properties.selectors";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./styles.css";
import { Box } from "@mui/material";
import SliderButtons from "./SliderButtons";
import { PropertyCardVertical } from "components/Layouts";

const responsive = {
  desktop: {
    items: 3,
    slidesToSlide: 3,
    breakpoint: { max: 3080, min: 1620 },
  },
  tablet: {
    items: 2,
    slidesToSlide: 2,
    breakpoint: { max: 1620, min: 820 },
  },
  mobile: {
    items: 1,
    slidesToSlide: 1,
    breakpoint: { max: 820, min: 0 },
  },
};

const Slider: React.FC = () => {
  const properties = useAppSelector(selectRelatedProperties);

  return (
    <Box position="relative" width="100%" height="530px">
      <Box
        position="absolute"
        p={{ xs: 0, sm: "15px" }}
        left={{ xs: 0, sm: "45px" }}
        right={{ xs: 0, sm: "45px" }}
        width={{ xs: "100%", sm: "calc(100% - 90px)" }}
      >
        <Carousel
          responsive={{ ...responsive }}
          swipeable={true}
          showDots={true}
          infinite={true}
          renderButtonGroupOutside={true}
          arrows={false}
          customButtonGroup={<SliderButtons />}
          containerClass="multi-carousel__container"
          dotListClass="multi-carousel__dots"
        >
          {properties.map((property) => (
            <PropertyCardVertical property={property} key={property._id} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Slider;
