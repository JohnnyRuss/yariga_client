import { useAppSelector } from "store/hooks";

import {
  selectAllProperties,
  selectAllPropertiesStatus,
} from "store/selectors/properties.selectors";
import { selectPropertyFilterStatus } from "store/selectors/propertiesFilter.selectors";

import * as UI from "./components";
import { Box } from "@mui/material";
import { ContentBox, Pagination, PropertiesList } from "components/Layouts";
import * as MuiStyled from "./components/AllProperties/AllProperties.styled";

const AllProperties: React.FC = () => {
  const filterStatus = useAppSelector(selectPropertyFilterStatus);

  const status = useAppSelector(selectAllPropertiesStatus);
  const { currentPage, pagesCount, properties } =
    useAppSelector(selectAllProperties);

  return (
    <ContentBox flex={true}>
      <MuiStyled.AllPropertiesContainer>
        <UI.AllPropertiesHeader />

        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          gap={1}
          className="content__box"
        >
          <UI.Filter loading={filterStatus.loading} />

          <PropertiesList
            status={status}
            list={properties}
            containerSx={{ marginTop: 0 }}
          />

          <Box mt="auto" ml="auto">
            <Pagination currentPage={currentPage} pagesCount={pagesCount} />
          </Box>
        </Box>
      </MuiStyled.AllPropertiesContainer>
    </ContentBox>
  );
};

export default AllProperties;
