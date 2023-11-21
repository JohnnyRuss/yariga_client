import React from "react";
import { useAppSelector } from "store/hooks";
import { useLocation, useNavigate } from "react-router-dom";

import { selectProperty } from "store/selectors/properties.selectors";

import ViewSkeleton from "./ViewSkeleton";
import { SliderModal } from "components/Layouts";
import PropertyViewMain from "./PropertyViewMain";
import PropertyViewThumb from "./PropertyViewThumb";
import { Box, Stack, Typography } from "@mui/material";

const PropertyView: React.FC<{ loading: boolean }> = ({ loading }) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const { images } = useAppSelector(selectProperty);

  const searchParams = new URLSearchParams(search);

  const activeTab = searchParams.get("active-tab") || "";
  const isActiveModal = activeTab === "gallery";

  const onGoToGallery = () => {
    searchParams.set("active-tab", "gallery");
    navigate(`?${searchParams.toString()}`);
  };

  return loading ? (
    <ViewSkeleton />
  ) : (
    <Stack
      mt="10px"
      direction={{ xs: "column", md: "row" }}
      gap="20px"
      height={{ xs: "40vh", sm: "70vh", md: "28.5vw" }}
    >
      {isActiveModal && <SliderModal images={images} />}

      <PropertyViewMain src={images?.[0]} onClick={onGoToGallery} />

      <Stack
        width={{ xs: "100%", md: "30%" }}
        flexDirection={{ xs: "row", md: "column" }}
        gap="22px"
      >
        <PropertyViewThumb src={images?.[1]} onClick={onGoToGallery} />

        <PropertyViewThumb src={images?.[2]} onClick={onGoToGallery}>
          <Box
            position="absolute"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ inset: 0, background: "rgba(0,0,0,0.6)" }}
          >
            <Typography color="app_text.light" fontSize={18}>
              +{images.length - 3}
            </Typography>
          </Box>
        </PropertyViewThumb>
      </Stack>
    </Stack>
  );
};

export default PropertyView;
