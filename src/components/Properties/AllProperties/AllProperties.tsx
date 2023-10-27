import React from "react";
import { useAppSelector } from "store/hooks";

import * as propertySelectors from "store/selectors/properties.selectors";

import { ContentBox, Pagination } from "components/Layouts";
import { Box } from "@mui/material";
import Filter from "./components/Filter";
import AllPropertiesHeader from "./components/AllPropertiesHeader";
import PropertiesList from "./components/PropertiesList";
import * as MuiStyled from "./components/styles/AllProperties.styled";

const AllProperties: React.FC = () => {
  const filterStatus = useAppSelector(
    propertySelectors.selectPropertyFilterStatus
  );
  const status = useAppSelector(propertySelectors.selectPropertiesStatus);

  return (
    <ContentBox flex={true}>
      <MuiStyled.AllPropertiesContainer>
        <AllPropertiesHeader />

        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          gap={1}
          className="content__box"
        >
          <Filter loading={filterStatus.loading} />

          <PropertiesList loading={status.loading} />

          <Box mt="auto" ml="auto">
            <Pagination page={1} />
          </Box>
        </Box>
      </MuiStyled.AllPropertiesContainer>
    </ContentBox>
  );
};

export default AllProperties;
