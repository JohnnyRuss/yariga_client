import React from "react";

import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@mui/material";

import { PieChartPropsT } from "interface/components/dashboard";

const PieChart: React.FC<PieChartPropsT> = ({
  colors,
  series,
  title,
  value,
  mainBoxProps,
  labelBoxProps,
}) => {
  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
      bgcolor="app_text.light"
      {...mainBoxProps}
    >
      <Stack {...labelBoxProps}>
        <Typography fontSize={14} color="app_text.main">
          {title}
        </Typography>
        <Typography fontSize={24} color="app_text.dark" fontWeight={700} mt={1}>
          {value}
        </Typography>
      </Stack>

      <ReactApexChart
        series={series}
        type="donut"
        width="120px"
        options={{
          colors,
          legend: { show: false },
          chart: { type: "donut" },
          dataLabels: { enabled: false },
        }}
      />
    </Box>
  );
};

export default PieChart;
