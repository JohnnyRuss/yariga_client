import { useEffect, useState } from "react";

import { DashboardT } from "interface/db/dashboard.types";
import { getDashboardDataQuery } from "store/saga/api/dashboard.api";

import * as UI from "./components";
import { Stack, Box } from "@mui/material";
import { ContentBox, SectionTitle, PieChart } from "components/Layouts";

const Dashboard: React.FC = () => {
  const [dashboard, setDashboard] = useState<DashboardT>({
    addressTypes: {},
    propertyTypes: {},
    forSale: 0,
    forRent: 0,
    rentPrices: {
      min: 0,
      max: 0,
    },
    salePrices: {
      min: 0,
      max: 0,
    },
    totalProperties: 0,
    usersRange: [],
    propertyLocations: [],
  });

  useEffect(() => {
    (async () => {
      const { data } = await getDashboardDataQuery();
      setDashboard(data);
    })();
  }, []);

  return (
    <ContentBox>
      <SectionTitle title="Dashboard" />

      <Box className="content__box" pb={{ md: 3 }}>
        <Box
          display="flex"
          flexWrap="wrap"
          gap={4}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <PieChart
            title="Properties for Sale"
            value={dashboard.forSale}
            series={[dashboard.forSale, dashboard.totalProperties]}
            colors={["#475be8", "#c4e8ef"]}
            mainBoxProps={{
              pl: 3.5,
              boxShadow: 5,
            }}
          />

          <PieChart
            title="Properties for Rent"
            value={dashboard.forRent}
            series={[dashboard.forRent, dashboard.totalProperties]}
            colors={["#4ccae4", "#c4e8ef"]}
            mainBoxProps={{
              pl: 3.5,
              boxShadow: 5,
            }}
          />

          <UI.UsersRange usersRange={dashboard.usersRange} />

          <UI.Location propertyLocations={dashboard.propertyLocations} />
        </Box>

        <Stack
          mt="25px"
          width="100%"
          direction={{ xs: "column", lg: "row" }}
          gap={4}
        >
          <UI.AddressTypes
            rentPrices={dashboard.rentPrices}
            salePrices={dashboard.salePrices}
            addressTypes={dashboard.addressTypes}
          />

          <UI.PropertyTypes propertyTypes={dashboard.propertyTypes} />
        </Stack>
      </Box>
    </ContentBox>
  );
};

export default Dashboard;
