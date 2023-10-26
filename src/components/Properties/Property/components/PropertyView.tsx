import React from "react";
import { useAppSelector } from "store/hooks";
import { useLocation, useNavigate } from "react-router-dom";

import { selectProperty } from "store/selectors/properties.selectors";

import { Box, Stack, Typography } from "@mui/material";
import { SliderModal } from "components/Layouts";

const PropertyView: React.FC = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const { images } = useAppSelector(selectProperty);

  const searchParams = new URLSearchParams(search);

  const onGoToGallery = () => {
    searchParams.set("active-tab", "gallery");
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <Stack mt="10px" direction="row" gap="20px" height="28.5vw">
      <SliderModal images={images} />

      <PropertyFig src={images?.[0]} onClick={onGoToGallery} />

      <Stack width="32%" gap="22px">
        <ThumbnailFig src={images?.[1]} onClick={onGoToGallery} />

        <ThumbnailFig src={images?.[2]} onClick={onGoToGallery}>
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
        </ThumbnailFig>
      </Stack>
    </Stack>
  );
};

export default PropertyView;

function PropertyFig({ src, onClick }: { src: string; onClick: () => void }) {
  return (
    <figure
      onClick={onClick}
      style={{
        width: "68%",
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <img
        src={src}
        alt="property"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </figure>
  );
}

function ThumbnailFig({
  src,
  onClick,
  children,
}: {
  src: string;
  onClick: () => void;
  children?: React.ReactNode;
}) {
  return (
    <figure
      onClick={onClick}
      style={{
        flex: 1,
        width: "100%",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {children}
      <img
        src={src}
        alt="property thumbnail"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </figure>
  );
}
