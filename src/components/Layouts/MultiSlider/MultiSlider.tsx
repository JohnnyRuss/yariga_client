import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./styles.css";
import { Box } from "@mui/material";

interface MultiSliderT {
  // render: (Slide: React.FC<{ children: React.ReactNode }>) => React.ReactNode;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

// const Slide: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   console.log(11);
//   return <div>{children}</div>;
// };

const MultiSlider: React.FC<MultiSliderT> = ({}) => {
  console.log(13);
  return (
    <Box
      flex={1}
      width="100%"
      maxWidth="100%"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      sx={{ backgroundColor: "green", height: "50px" }}
    >
      <Carousel
        responsive={responsive}
        // swipeable={true}
        // showDots={true}
        // infinite={true}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container"
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </Box>
  );
};

export default MultiSlider;
