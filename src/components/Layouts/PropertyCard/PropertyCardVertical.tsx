import React from "react";
import { Link } from "react-router-dom";

import * as UI from "./components";
import * as MuiStyled from "./PropertyCard.styled";
import { CardMedia, Divider } from "@mui/material";

import { PropertyShortInfoT } from "interface/db/properties.types";
interface PropertyCardVerticalT {
  property: PropertyShortInfoT;
}

const PropertyCardVertical: React.FC<PropertyCardVerticalT> = ({
  property,
}) => {
  return (
    <Link to={`/properties/${property._id}`}>
      <MuiStyled.CardVertical elevation={2}>
        <CardMedia
          component="img"
          src={property.images[0]}
          alt={property.images[0]}
          width="100%"
          height={210}
          sx={{ borderRadius: "10px" }}
        />

        <MuiStyled.CardContent>
          <UI.Title title={property.title} />

          <UI.StatusAndPrice
            price={property.price}
            status={property.propertyStatus}
          />

          <UI.Chips
            addressType={property.location.addressType}
            propertyType={property.propertyType.label}
          />

          <UI.Location location={property.location.displayName} />

          <Divider />

          <UI.User owner={property.owner} isAgent={true} />

          <Divider />

          <UI.ExtraDetails
            area={property.area}
            bedroomsAmount={property.bedroomsAmount}
            bathroomsAmount={property.bathroomsAmount}
          />
        </MuiStyled.CardContent>
      </MuiStyled.CardVertical>
    </Link>
  );
};

export default PropertyCardVertical;
