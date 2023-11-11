import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import {
  NoContentMessage,
  PropertyCardHorizontal,
  PropertyCardHorizontalSkeleton,
} from "components/Layouts";
import { Grid, SxProps } from "@mui/material";

import { LoadingStatusT } from "interface/store/common.types";
import { PropertyShortInfoT } from "interface/db/properties.types";

interface PropertiesListT {
  skeletonCount?: number;
  status: LoadingStatusT;
  list: Array<PropertyShortInfoT>;
  containerSx?: SxProps;
}

const PropertiesList: React.FC<PropertiesListT> = ({
  list,
  status,
  containerSx,
  skeletonCount = 9,
}) => {
  return status.loading ? (
    <PropertiesListContainer containerSx={containerSx}>
      {Array.from(new Array(skeletonCount)).map(() => (
        <Grid item key={nanoid()} xs={12} lg={6} xl={4}>
          <PropertyCardHorizontalSkeleton />
        </Grid>
      ))}
    </PropertiesListContainer>
  ) : (
    <PropertiesListContainer containerSx={containerSx}>
      {list[0] ? (
        list.map((property) => (
          <Grid item key={property._id} xs={12} lg={6} xl={4}>
            <PropertyCardHorizontal property={property} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <NoContentMessage message="There are no properties yet." />
        </Grid>
      )}
    </PropertiesListContainer>
  );
};

export default PropertiesList;

function PropertiesListContainer({
  children,
  containerSx,
}: {
  children: React.ReactNode;
  containerSx?: SxProps;
}) {
  return (
    <Grid container mt="20px" mb="20px" spacing="30px" sx={containerSx}>
      {children}
    </Grid>
  );
}
