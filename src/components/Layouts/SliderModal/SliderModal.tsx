/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Gallery from "./Gallery";
import SliderView from "./SliderView";
import { Modal } from "components/Layouts";
import { ArrowBackIos } from "@mui/icons-material";
import { Typography, Box, Stack, Button } from "@mui/material";

interface SliderModalT {
  images: string[];
}

const SliderModal: React.FC<SliderModalT> = ({ images }) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(NaN);

  const searchParams = new URLSearchParams(search);

  const activeTabParam = searchParams.get("active-tab");
  const isActiveTab = activeTabParam === "gallery";

  const onActivateSlider = (index: number) => setActiveSlideIndex(index);

  const onBackToGallery = () => setActiveSlideIndex(NaN);

  const onClose = () => {
    searchParams.delete("active-tab");
    setActiveSlideIndex(NaN);
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <Modal open={isActiveTab} onClose={onClose}>
      <Box
        sx={{
          padding: 2,
          backgroundColor: "app_text.light",
          borderRadius: "10px",
        }}
      >
        <Stack direction="row" gap="15px" alignItems="center" pb={1}>
          {!isNaN(activeSlideIndex) && (
            <Button variant="text" onClick={onBackToGallery}>
              <ArrowBackIos sx={{ fontSize: "28px" }} />
            </Button>
          )}

          <Typography fontWeight={600} fontSize={24}>
            Gallery
          </Typography>
        </Stack>

        {isNaN(activeSlideIndex) && (
          <Gallery images={images} onActivateSlider={onActivateSlider} />
        )}

        {!isNaN(activeSlideIndex) && (
          <SliderView images={images} initialSlide={activeSlideIndex} />
        )}
      </Box>
    </Modal>
  );
};

export default SliderModal;
