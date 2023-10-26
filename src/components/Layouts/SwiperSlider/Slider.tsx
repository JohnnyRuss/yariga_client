import React, { useState } from "react";

import { Stack } from "@mui/material";
import { SwiperClass } from "swiper/react";
import { Thumbs, Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "./appSwiper.css";

import SliderThumbnails from "./SliderThumbnails";
import SliderMainView from "./SliderMainView";

interface SliderT {
  images: string[];
  initialSlide?: number;
}

const Slider: React.FC<SliderT> = ({ images, initialSlide = 0 }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <Stack sx={{ height: "100%", width: "100%" }}>
      <SliderMainView
        images={images}
        Thumbs={Thumbs}
        FreeMode={FreeMode}
        Navigation={Navigation}
        thumbsSwiper={thumbsSwiper}
        initialSlide={initialSlide}
      />

      <SliderThumbnails
        images={images}
        Thumbs={Thumbs}
        FreeMode={FreeMode}
        Navigation={Navigation}
        setThumbsSwiper={setThumbsSwiper}
        initialSlide={initialSlide}
      />
    </Stack>
  );
};

export default Slider;
