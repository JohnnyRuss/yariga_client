import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

import {
  selectAllProperties,
  selectPropertiesStatus,
} from "store/selectors/properties.selectors";

import {
  NoContentMessage,
  PropertyCardHorizontal,
  PropertyCardHorizontalSkeleton,
} from "components/Layouts";
import { Stack } from "@mui/material";

interface PropertiesListT {
  skeletonCount?: number;
}

const PropertiesList: React.FC<PropertiesListT> = ({ skeletonCount = 9 }) => {
  const status = useAppSelector(selectPropertiesStatus);
  const properties = useAppSelector(selectAllProperties);

  return status.loading ? (
    <PropertiesListContainer>
      {Array.from(new Array(skeletonCount)).map(() => (
        <PropertyCardHorizontalSkeleton key={nanoid()} />
      ))}
    </PropertiesListContainer>
  ) : (
    <PropertiesListContainer propertiesLength={properties.length}>
      {properties[0] ? (
        properties.map((property) => (
          <PropertyCardHorizontal key={property._id} property={property} />
        ))
      ) : (
        <NoContentMessage message="There are no properties yet." />
      )}
    </PropertiesListContainer>
  );
};

export default PropertiesList;

function PropertiesListContainer({
  children,
  propertiesLength = 3,
}: {
  children: React.ReactNode;
  propertiesLength?: number;
}) {
  return (
    <Stack
      mt="20px"
      mb="20px"
      gap="30px"
      direction="row"
      flexWrap="wrap"
      justifyContent={propertiesLength > 2 ? "space-evenly" : "flex-start"}
    >
      {children}
    </Stack>
  );
}
