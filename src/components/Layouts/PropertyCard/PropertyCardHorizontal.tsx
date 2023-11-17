import React from "react";
import { Link } from "react-router-dom";

import { dynamic_paths } from "config/paths";

import * as UI from "./components";
import * as MuiStyled from "./PropertyCard.styled";
import { CardMedia, Divider, Rating } from "@mui/material";

import { PropertyShortInfoT } from "interface/db/properties.types";

interface PropertyCardHorizontalT {
  property: PropertyShortInfoT;
}

const PropertyCardHorizontal: React.FC<PropertyCardHorizontalT> = ({
  property,
}) => {
  const ownerData = property.agent ? property.agent : property.owner;

  return (
    <Link to={dynamic_paths.property_page(property._id)} className="app__card">
      <MuiStyled.CardHorizontal>
        <CardMedia
          component="img"
          src={property.images[0]}
          alt={property.images[0]}
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

          <Rating
            value={property.avgRating}
            precision={0.1}
            readOnly
            size="small"
          />

          <Divider />

          <UI.User owner={ownerData} isAgent={property.agent ? true : false} />

          <Divider />

          <UI.ExtraDetails
            area={property.area}
            bedroomsAmount={property.bedroomsAmount}
            bathroomsAmount={property.bathroomsAmount}
          />
        </MuiStyled.CardContent>
      </MuiStyled.CardHorizontal>
    </Link>
  );
};

export default PropertyCardHorizontal;
