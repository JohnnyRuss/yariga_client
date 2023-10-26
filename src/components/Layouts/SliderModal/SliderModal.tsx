/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Gallery from "./Gallery";
import SliderView from "./SliderView";
import { Modal } from "components/Layouts";
import { Typography, Box, Stack, Button } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";

interface SliderModalT {
  images: string[];
}

const SliderModal: React.FC<SliderModalT> = ({ images }) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);

  const activeTab = searchParams.get("active-tab");
  const activeViewIndex = searchParams.get("view-index");

  const onActivateSlider = (index: number) => {
    searchParams.set("active-tab", "view");
    searchParams.set("view-index", index.toString());
    navigate(`?${searchParams.toString()}`);
  };

  const onBackToGallery = () => {
    searchParams.set("active-tab", "gallery");
    searchParams.delete("view-index");
    navigate(`?${searchParams.toString()}`);
  };

  const onClose = () => {
    searchParams.delete("view-index");
    searchParams.delete("active-tab");
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <Modal open={activeTab ? true : false} onClose={onClose}>
      <Box
        sx={{
          padding: 2,
          backgroundColor: "app_text.light",
          borderRadius: "10px",
        }}
      >
        <Stack direction="row" gap="15px" alignItems="center" pb={1}>
          {activeTab === "view" && (
            <Button variant="text" onClick={onBackToGallery}>
              <ArrowBackIos sx={{ fontSize: "28px" }} />
            </Button>
          )}

          <Typography fontWeight={600} fontSize={24}>
            Gallery
          </Typography>
        </Stack>

        {activeTab === "gallery" && (
          <Gallery images={images} onActivateSlider={onActivateSlider} />
        )}

        {activeTab === "view" && (
          <SliderView
            images={images}
            initialSlide={activeViewIndex ? +activeViewIndex : 0}
          />
        )}
      </Box>
    </Modal>
  );
};

export default SliderModal;
