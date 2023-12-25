import { textCapitalize } from "utils";
import { addressTypesOptions } from "config/constants";

import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@mui/material";
import AddressTypesHeaderLabel from "./AddressTypesHeaderLabel";

import {
  PropertiesByTypeT,
  PropertyMinMaxPriceT,
} from "interface/db/dashboard.types";

type AddressTypesT = {
  addressTypes: PropertiesByTypeT;
  rentPrices: PropertyMinMaxPriceT;
  salePrices: PropertyMinMaxPriceT;
};

const AddressTypes: React.FC<AddressTypesT> = ({
  addressTypes,
  rentPrices,
  salePrices,
}) => {
  const values: Array<number> = Object.values(addressTypes);
  const keys: Array<string> = Object.keys(addressTypes).map((k) =>
    textCapitalize(k)
  );

  return (
    <Box
      p={4}
      flex={4}
      bgcolor="app_text.light"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
      boxShadow={5}
    >
      <Typography fontSize={18} fontWeight={600} color="app_text.dark">
        Address Types
      </Typography>

      <Stack
        gap={2}
        my="20px"
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <AddressTypesHeaderLabel
          title="Rent Price"
          min={rentPrices.min}
          max={rentPrices.max}
        />
        <AddressTypesHeaderLabel
          title="Sale Price"
          min={salePrices.min}
          max={salePrices.max}
        />
      </Stack>

      <ReactApexChart
        series={[{ data: values }]}
        type="bar"
        width="100%"
        height={310}
        options={addressTypesOptions(keys)}
      />
    </Box>
  );
};

export default AddressTypes;
