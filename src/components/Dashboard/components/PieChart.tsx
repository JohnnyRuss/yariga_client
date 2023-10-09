import React from "react";

import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@mui/material";

import { PieChartPropsT } from "interface/home";

const PieChart: React.FC<PieChartPropsT> = ({
  colors,
  series,
  title,
  value,
}) => {
  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
      bgcolor="#fcfcfc"
    >
      <Stack>
        <Typography fontSize={14} color="#808191">
          {title}
        </Typography>
        <Typography fontSize={24} color="#11142d" fontWeight={700} mt={1}>
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
