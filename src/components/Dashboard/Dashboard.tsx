import React from "react";

import {
  TotalRevenue,
  PropertyReferrals,
} from "components/Dashboard/components";
import { Stack } from "@mui/material";
import PieCharts from "./components/PieCharts";
import { ContentBox, SectionTitle } from "components/Layouts";

const Dashboard: React.FC = () => {
  return (
    <ContentBox>
      <SectionTitle title="Dashboard" />

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
