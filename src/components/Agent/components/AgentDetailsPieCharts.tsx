import React from "react";

import { Box } from "@mui/material";
// import { PieChart } from "components/Layouts";

interface AgentDetailsPieChartsT {}

const AgentDetailsPieCharts: React.FC<AgentDetailsPieChartsT> = () => {
  return (
    <Box display="flex" flexWrap="wrap" gap={4} mt="20px">
      {/* <PieChart
        title="Total Listing"
        value={total}
        series={[300, 198]}
        colors={["#475be8", "#c4e8ef"]}
        mainBoxProps={{
          boxShadow: 5,
          flexDirection: "column",
        }}
        labelBoxProps={{
          sx: { alignItems: "center" },
        }}
      />

      <PieChart
        title="Properties Sold"
        value={sold}
        series={[300, sold]}
        colors={["#4ccae4", "#c4e8ef"]}
        mainBoxProps={{
          boxShadow: 5,
          flexDirection: "column",
        }}
        labelBoxProps={{
          sx: { alignItems: "center" },
        }}
      />

      <PieChart
        title="Properties Rent"
        value={rent}
        series={[300, rent]}
        colors={["#7e5ce2", "#c4e8ef"]}
        mainBoxProps={{
          boxShadow: 5,
          flexDirection: "column",
        }}
        labelBoxProps={{
          sx: { alignItems: "center" },
        }}
      /> */}
    </Box>
  );
};

export default AgentDetailsPieCharts;
