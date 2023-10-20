import React from "react";
import { useAppSelector } from "store/hooks";

import {
  selectAllProperties,
  selectPropertiesStatus,
} from "store/selectors/properties.selectors";

import { Box } from "@mui/material";
import { PropertyCard, ContentBox, Spinner } from "components/Layouts";
import AllPropertiesHeader from "./components/AllPropertiesHeader";

const AllProperties: React.FC = () => {
  const status = useAppSelector(selectPropertiesStatus);
  const properties = useAppSelector(selectAllProperties);

  return (
    <ContentBox>
      <AllPropertiesHeader />

      {status.loading && <Spinner />}

      {!status.loading && (
        <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </Box>
      )}
    </ContentBox>
  );
};

export default AllProperties;
