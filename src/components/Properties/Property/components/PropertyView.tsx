import React from "react";
import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import { Box, Stack, Typography } from "@mui/material";

const PropertyView: React.FC = () => {
  const { images } = useAppSelector(selectProperty);

  return (
    <Stack mt="10px" direction="row" gap="20px" height="28.5vw">
      <PropertyFig src={images[0]} />

      <Stack width="32%" gap="22px">
        <ThumbnailFig src={images[1]} />

        <ThumbnailFig src={images[2]}>
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

function PropertyFig({ src }: { src: string }) {
  return (
    <figure
      style={{
        width: "68%",
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden",
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
  children,
}: {
  src: string;
  children?: React.ReactNode;
}) {
  return (
    <figure
      style={{
        flex: 1,
        width: "100%",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
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
