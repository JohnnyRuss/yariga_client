import React from "react";

// import { TopAgent } from "components/Agent";
import {
  // PropertyCard,
  ContentBox,
} from "components/Layouts";
import {
  PropertyReferrals,
  TotalRevenue,
} from "components/Dashboard/components";
import PieCharts from "./components/PieCharts";
import { Typography, Stack } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <ContentBox>
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
    </ContentBox>
  );
};

export default Dashboard;
