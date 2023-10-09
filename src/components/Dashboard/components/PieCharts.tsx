import React from "react";

import { Box } from "@mui/material";
import { PieChart } from "components/Dashboard/components";

const PieCharts: React.FC = () => {
  return (
    <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
      <PieChart
        title="Properties for Sale"
        value={684}
        series={[75, 25]}
        colors={["#475be8", "#e4e8ef"]}
      />

      <PieChart
        title="Properties for Rent"
        value={550}
        series={[60, 40]}
        colors={["#4ccae4", "#e4b8ef"]}
      />

      <PieChart
        title="Total customers"
        value={5684}
        series={[75, 25]}
        colors={["#2bbde4", "#c4e8ef"]}
      />

      <PieChart
        title="Properties for Cities"
        value={555}
        series={[75, 25]}
        colors={["#7e5ce2", "#e8c84f"]}
      />
    </Box>
  );
};

export default PieCharts;
