import React from "react";

// import { TopAgent } from "components/Agent";
// import { PropertyCard } from "components/Layouts";
import { Typography, Box, Stack } from "@mui/material";
import PieCharts from "./components/PieCharts";
import {
  PropertyReferrals,
  TotalRevenue,
} from "components/Dashboard/components";

const Dashboard: React.FC = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="app_text.dark">
        Dashboard
      </Typography>

      <PieCharts />

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />

        <PropertyReferrals />
      </Stack>
    </Box>
  );
};

export default Dashboard;
