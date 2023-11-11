import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import { Stack } from "@mui/material";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";

interface SwiperModuleT {
  name: string;
}

interface SliderThumbnailsT {
  images: string[];
  setThumbsSwiper: React.Dispatch<React.SetStateAction<SwiperClass | null>>;
  Navigation: SwiperModuleT;
  Thumbs: SwiperModuleT;
  FreeMode: SwiperModuleT;
  initialSlide: number;
  onSlideChange?: (data: SwiperClass) => void;
}

const SliderThumbnails: React.FC<SliderThumbnailsT> = ({
  images,
  Thumbs,
  FreeMode,
  Navigation,
  onSlideChange,
  setThumbsSwiper,
  initialSlide = 0,
}) => {
  return (
    <Stack direction="row" className="app-swiper__thumbnails-container">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        breakpoints={{
          280: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 5,
          },
          900: {
            slidesPerView: 7,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs, Navigation, FreeMode]}
        className="app-swiper__thumbnails"
        initialSlide={initialSlide}
        onSlideChange={onSlideChange ?? undefined}
      >
        {images.map((image) => (
          <SwiperSlide key={nanoid()}>
            <figure className="swiper-slide__figs" style={{}}>
              <img src={image} alt={image} className="swiper-slide__img" />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default SliderThumbnails;
