import { Box, Typography } from "@mui/material";

type PropertyPriceT = { price: string | number };

const PropertyPrice: React.FC<PropertyPriceT> = ({ price }) => {
  return (
    <Box
      px={1.5}
      py={0.5}
      borderRadius={1}
      bgcolor="#dadefa"
      height="fit-content"
    >
      <Typography fontSize={12} fontWeight={600} color="app_blue.light">
        ${price.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default PropertyPrice;
