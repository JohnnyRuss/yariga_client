import React from "react";
import { useAppSelector } from "store/hooks";

import {
  selectAllProperties,
  selectAllPropertiesStatus,
} from "store/selectors/properties.selectors";
import { selectPropertyFilterStatus } from "store/selectors/propertiesFilter.selectors";

import { Box } from "@mui/material";
import Filter from "./components/Filter";
import AllPropertiesHeader from "./components/AllPropertiesHeader";
import { ContentBox, Pagination, PropertiesList } from "components/Layouts";
import * as MuiStyled from "./components/styles/AllProperties.styled";

const AllProperties: React.FC = () => {
  const filterStatus = useAppSelector(selectPropertyFilterStatus);

  const status = useAppSelector(selectAllPropertiesStatus);
  const propertiesList = useAppSelector(selectAllProperties);

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

          <PropertiesList status={status} list={propertiesList} />

          <Box mt="auto" ml="auto">
            <Pagination page={1} />
          </Box>
        </Box>
      </MuiStyled.AllPropertiesContainer>
    </ContentBox>
  );
};

export default AllProperties;
