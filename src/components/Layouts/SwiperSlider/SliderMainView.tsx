import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { Box, Paper } from "@mui/material";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";

interface SwiperModuleT {
  name: string;
}

interface SliderMainViewT {
  images: string[];
  thumbsSwiper: SwiperClass | null;
  Thumbs: SwiperModuleT;
  FreeMode: SwiperModuleT;
  Navigation: SwiperModuleT;
  initialSlide: number;
  onSlideChange?: (data: SwiperClass) => void;
}

const SliderMainView: React.FC<SliderMainViewT> = ({
  images,
  Thumbs,
  FreeMode,
  Navigation,
  thumbsSwiper,
  onSlideChange,
  initialSlide,
}) => {
  return (
    <Box className="app-swiper__main-container">
      <Swiper
        slidesPerView={1}
        navigation={true}
        className="app-swiper__main"
        initialSlide={initialSlide}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, Navigation, FreeMode]}
        onSlideChange={onSlideChange ?? undefined}
      >
        {images.map((image) => (
          <SwiperSlide key={nanoid()}>
            <Box className="swiper-slide__wrapper">
              <Paper component="figure" className="swiper-slide__figs">
                <img src={image} alt={image} className="swiper-slide__img" />
              </Paper>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SliderMainView;
