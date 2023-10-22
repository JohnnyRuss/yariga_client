import React from "react";
import { useAppSelector } from "store/hooks";

import {
  selectAllProperties,
  selectPropertiesStatus,
} from "store/selectors/properties.selectors";

import {
  Spinner,
  ContentBox,
  Pagination,
  PropertyCardHorizontal,
} from "components/Layouts";
import { Box } from "@mui/material";
import Filter from "./components/Filter";
import AllPropertiesHeader from "./components/AllPropertiesHeader";

const AllProperties: React.FC = () => {
  const status = useAppSelector(selectPropertiesStatus);
  const properties = useAppSelector(selectAllProperties);

  return (
    <ContentBox flex={true}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AllPropertiesHeader />

        {status.loading && <Spinner />}

        {/* <Box bgcolor="app_bg.main"> */}
        <Box height="100%" display="flex" flexDirection="column">
          {!status.loading && (
            <>
              <Filter />

              <Box
                mt="20px"
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent:
                    properties.length > 1 ? "space-evenly" : "flex-start",
                  gap: 3,
                }}
              >
                {properties.map((property) => (
                  <PropertyCardHorizontal
                    key={property._id}
                    property={property}
                  />
                ))}
              </Box>
            </>
          )}

          <Box mt="auto" ml="auto">
            <Pagination />
          </Box>
        </Box>
      </Box>
    </ContentBox>
  );
};

export default AllProperties;
