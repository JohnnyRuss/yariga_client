import { textCapitalize } from "utils";
import { locationOptions } from "config/constants";

import ReactApexChart from "react-apexcharts";
import { Box, Stack, Typography } from "@mui/material";

import { PropertyLocationT } from "interface/db/dashboard.types";

type LocationT = {
  propertyLocations: Array<PropertyLocationT>;
};

const Location: React.FC<LocationT> = ({ propertyLocations }) => {
  const rentSeries = propertyLocations.map((l) => l.rent);
  const saleSeries = propertyLocations.map((l) => l.sale);
  const locations = propertyLocations.map((l) => l.total);
  const categories = propertyLocations.map((l) => textCapitalize(l.country));
  const max = Math.max(...locations);

  return (
    <Box
      py={2}
      gap={1}
      flex={1}
      boxShadow={5}
      display="flex"
      minHeight="110px"
      alignItems="center"
      width="100%"
      borderRadius="15px"
      bgcolor="app_text.light"
      justifyContent="space-between"
    >
      <Stack alignItems="center" width="100%">
        <Stack pl={3.5}>
          <Typography fontSize={14} fontWeight={600} color="app_text.main">
            TOP 5 Location
          </Typography>
        </Stack>

        <Box position="relative" width="100%" mt="auto">
          <ReactApexChart
            type="line"
            width="100%"
            height="100%"
            series={[
              {
                name: "RENT",
                type: "line",
                color: "#F2C335",
                data: rentSeries,
              },
              {
                name: "SALE",
                type: "area",
                color: "#2ED480",
                data: saleSeries,
              },
              {
                name: "Locations",
                type: "column",
                color: "#475BE8",
                data: locations,
              },
            ]}
            options={locationOptions(categories, max)}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Location;
