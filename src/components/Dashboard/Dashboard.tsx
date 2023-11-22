import * as UI from "./components";
import { Stack } from "@mui/material";
import { ContentBox, SectionTitle } from "components/Layouts";

const Dashboard: React.FC = () => {
  return (
    <ContentBox>
      <SectionTitle title="Dashboard" />

      <UI.PieCharts />

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <UI.TotalRevenue />

        <UI.PropertyReferrals />
      </Stack>
    </ContentBox>
  );
};

export default Dashboard;
