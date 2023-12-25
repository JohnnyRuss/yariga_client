import { textCapitalize } from "utils";
import { propertyTypesOptions } from "config/constants";

import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@mui/material";

import { PropertiesByTypeT } from "interface/db/dashboard.types";

type PropertyTypesT = {
  propertyTypes: PropertiesByTypeT;
};

const PropertyTypes: React.FC<PropertyTypesT> = ({ propertyTypes }) => {
  const categories = Object.keys(propertyTypes).map((k) => textCapitalize(k));
  const series = Object.values(propertyTypes);
  const max = Math.max(...series);

  return (
    <Box
      p={4}
      flex={2}
      id="chart"
      boxShadow={5}
      minWidth={300}
      display="flex"
      borderRadius="15px"
      flexDirection="column"
      bgcolor="app_text.light"
    >
      <Typography fontSize={18} fontWeight={600} color="app_text.dark">
        Property Types
      </Typography>

      <Stack my="20px" direction="column" gap={4}>
        <ReactApexChart
          type="bar"
          width="100%"
          height={370}
          series={[{ data: series }]}
          options={propertyTypesOptions(categories, max)}
        />
      </Stack>
    </Box>
  );
};

export default PropertyTypes;
