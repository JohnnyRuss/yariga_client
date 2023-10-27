import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "store/hooks";

import { selectAllProperties } from "store/selectors/properties.selectors";

import {
  PropertyCardHorizontal,
  PropertyCardHorizontalSkeleton,
} from "components/Layouts";
import * as MuiStyled from "./styles/AllProperties.styled";

interface PropertiesListT {
  loading?: boolean;
}

const PropertiesList: React.FC<PropertiesListT> = ({ loading }) => {
  const properties = useAppSelector(selectAllProperties);

  return loading ? (
    <MuiStyled.AllPropertiesList justify={"flex-start"}>
      {Array.from(new Array(9)).map(() => (
        <PropertyCardHorizontalSkeleton key={nanoid()} />
      ))}
    </MuiStyled.AllPropertiesList>
  ) : (
    <MuiStyled.AllPropertiesList
      justify={properties.length > 1 ? "space-evenly" : "flex-start"}
    >
      {properties.map((property) => (
        <PropertyCardHorizontal key={property._id} property={property} />
      ))}
    </MuiStyled.AllPropertiesList>
  );
};

export default PropertiesList;
