import { useAppSelector } from "store/hooks";

import { useSearchParams } from "hooks/utils";
import { selectProperty } from "store/selectors/properties.selectors";

import * as UI from "./components";
import { SliderModal } from "components/Layouts";
import { Box, Stack, Typography } from "@mui/material";

const PropertyView: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { images } = useAppSelector(selectProperty);

  const { getParamValue, appendParam } = useSearchParams();

  const isActiveModal = getParamValue("active-tab") === "gallery";

  const onGoToGallery = () => appendParam("active-tab", "gallery");

  return loading ? (
    <UI.ViewSkeleton />
  ) : (
    <Stack
      mt="10px"
      direction={{ xs: "column", md: "row" }}
      gap="20px"
      height={{ xs: "40vh", sm: "70vh", md: "28.5vw" }}
    >
      {isActiveModal && <SliderModal images={images} />}

      <UI.PropertyViewMain src={images?.[0]} onClick={onGoToGallery} />

      <Stack
        width={{ xs: "100%", md: "30%" }}
        flexDirection={{ xs: "row", md: "column" }}
        gap="22px"
      >
        <UI.PropertyViewThumb src={images?.[1]} onClick={onGoToGallery} />

        <UI.PropertyViewThumb src={images?.[2]} onClick={onGoToGallery}>
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
        </UI.PropertyViewThumb>
      </Stack>
    </Stack>
  );
};

export default PropertyView;
