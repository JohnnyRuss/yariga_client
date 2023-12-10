import * as UI from "./components";
import { Stack, Box } from "@mui/material";
import { ContentBox, SectionTitle } from "components/Layouts";

const Dashboard: React.FC = () => {
  return (
    <ContentBox>
      <SectionTitle title="Dashboard" />

      <Box className="content__box">
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
      </Box>
    </ContentBox>
  );
};

export default Dashboard;
