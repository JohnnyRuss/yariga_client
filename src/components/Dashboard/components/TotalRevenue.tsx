import React from "react";

import { TOTAL_REVENUE_SERIES, TOTAL_REVENUE_OPTIONS } from "config/constants";

import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@mui/material";
import { ArrowCircleUpRounded } from "@mui/icons-material";

interface TotalRevenueT {}

const TotalRevenue: React.FC<TotalRevenueT> = (props) => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="app_text.light"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="app_text.dark">
        Total Revenue
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="app_text.dark">
          $236,535
        </Typography>

        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded
            sx={{ fontSize: 25, color: "app_blue.light" }}
          />

          <Stack>
            <Typography fontSize={15} color="app_blue.light">
              0.8%
            </Typography>

            <Typography fontSize={12} color="app_text.main">
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
        series={TOTAL_REVENUE_SERIES}
        type="bar"
        width="100%"
        height={310}
        options={TOTAL_REVENUE_OPTIONS}
      />
    </Box>
  );
};

export default TotalRevenue;
