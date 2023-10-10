import React from "react";

import { PIE_CHARTS } from "config/constants";
import { Box } from "@mui/material";
import PieChart from "./PieChart";

const PieCharts: React.FC = () => {
  return (
    <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
      {PIE_CHARTS.map((chart) => (
        <PieChart
          key={chart.id}
          title={chart.title}
          value={chart.value}
          series={chart.series}
          colors={chart.colors}
        />
      ))}
    </Box>
  );
};

export default PieCharts;
