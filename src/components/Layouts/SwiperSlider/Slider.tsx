import { useState } from "react";

import { Stack } from "@mui/material";
import { SwiperClass } from "swiper/react";
import { Thumbs, Navigation, FreeMode } from "swiper/modules";

import "./appSwiper.css";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as UI from "./components";

interface SliderT {
  images: string[];
  initialSlide?: number;
  onSlideChange?: (data: SwiperClass) => void;
}

const Slider: React.FC<SliderT> = ({
  images,
  initialSlide = 0,
  onSlideChange,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <Stack sx={{ height: "100%", width: "100%" }}>
      <UI.SliderMainView
        images={images}
        Thumbs={Thumbs}
        FreeMode={FreeMode}
        Navigation={Navigation}
        thumbsSwiper={thumbsSwiper}
        initialSlide={initialSlide}
        onSlideChange={onSlideChange}
      />

      <UI.SliderThumbnails
        images={images}
        Thumbs={Thumbs}
        FreeMode={FreeMode}
        Navigation={Navigation}
        setThumbsSwiper={setThumbsSwiper}
        initialSlide={initialSlide}
        onSlideChange={onSlideChange}
      />
    </Stack>
  );
};

export default Slider;
