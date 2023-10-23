import React from "react";
import { useAppSelector } from "store/hooks";

import * as propertySelectors from "store/selectors/properties.selectors";

import {
  Spinner,
  ContentBox,
  Pagination,
  PropertyCardHorizontal,
} from "components/Layouts";
import { Box } from "@mui/material";
import Filter from "./components/Filter";
import AllPropertiesHeader from "./components/AllPropertiesHeader";
import * as MuiStyled from "./components/styles/AllProperties.styled";

const AllProperties: React.FC = () => {
  const filterStatus = useAppSelector(
    propertySelectors.selectPropertyFilterStatus
  );
  const status = useAppSelector(propertySelectors.selectPropertiesStatus);
  const properties = useAppSelector(propertySelectors.selectAllProperties);

  return (
    <ContentBox flex={true}>
      <MuiStyled.AllPropertiesContainer>
        <AllPropertiesHeader />

        {status.loading && <Spinner />}

        <Box height="100%" display="flex" flexDirection="column">
          {!filterStatus.loading && <Filter />}

          {!status.loading && (
            <MuiStyled.AllPropertiesList
              justify={properties.length > 1 ? "space-evenly" : "flex-start"}
            >
              {properties.map((property) => (
                <PropertyCardHorizontal
                  key={property._id}
                  property={property}
                />
              ))}
            </MuiStyled.AllPropertiesList>
          )}

          <Box mt="auto" ml="auto">
            <Pagination page={1} />
          </Box>
        </Box>
      </MuiStyled.AllPropertiesContainer>
    </ContentBox>
  );
};

export default AllProperties;
