import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import {
  NoContentMessage,
  PropertyCardHorizontal,
  PropertyCardHorizontalSkeleton,
} from "components/Layouts";
import { Stack } from "@mui/material";

import { LoadingStatusT } from "interface/store/common.types";
import { PropertyShortInfoT } from "interface/db/properties.types";

interface PropertiesListT {
  skeletonCount?: number;
  status: LoadingStatusT;
  list: Array<PropertyShortInfoT>;
}

const PropertiesList: React.FC<PropertiesListT> = ({
  status,
  skeletonCount = 9,
  list,
}) => {
  return status.loading ? (
    <PropertiesListContainer>
      {Array.from(new Array(skeletonCount)).map(() => (
        <PropertyCardHorizontalSkeleton key={nanoid()} />
      ))}
    </PropertiesListContainer>
  ) : (
    <PropertiesListContainer propertiesLength={list.length}>
      {list[0] ? (
        list.map((property) => (
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
