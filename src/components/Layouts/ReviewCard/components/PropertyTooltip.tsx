import { Link } from "react-router-dom";

import { DYNAMIC_PATHS } from "config/paths";

import { Box, Stack } from "@mui/material";
import { PropertyStatus, PropertyPrice } from "components/Layouts";

import { ReviewPropertyInfoT } from "interface/store/review.types";

type PropertyTooltipT = {
  reviewId: string;
  property: ReviewPropertyInfoT;
};

const PropertyTooltip: React.FC<PropertyTooltipT> = ({
  property,
  reviewId,
}) => {
  return (
    <Link to={DYNAMIC_PATHS.property_page(property._id)} state={{ reviewId }}>
      <Box
        p={0}
        width="250px"
        height="250px"
        overflow="hidden"
        borderRadius="6px"
        position="relative"
      >
        <Box
          zIndex={1}
          width="100%"
          height="100%"
          sx={{ inset: 0 }}
          component="figure"
          position="absolute"
        >
          <Box
            width="100%"
            height="100%"
            component="img"
            loading="eager"
            alt={property.title}
            title={property.title}
            src={property.thumbnail}
            sx={{ objectFit: "cover" }}
          />
        </Box>

        <Stack width="100%" height="100%" position="relative" zIndex={2}>
          <Stack
            px="5px"
            mt="5px"
            direction="row"
            justifyContent="space-between"
          >
            <PropertyPrice price={property.price} />
            <PropertyStatus status={property.propertyStatus} />
          </Stack>

          <Box
            px={1}
            py={2}
            mt="auto"
            component="p"
            color="app_text.light"
            bgcolor="rgba(0,0,0,0.5)"
            textTransform="capitalize"
            sx={{ backdropFilter: "blur(3px)" }}
          >
            {property.title}
          </Box>
        </Stack>
      </Box>
    </Link>
  );
};

export default PropertyTooltip;
