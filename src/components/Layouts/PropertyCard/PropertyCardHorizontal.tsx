import { Link } from "react-router-dom";

import { DYNAMIC_PATHS } from "config/paths";

import * as UI from "./components";
import * as MuiStyled from "./PropertyCard.styled";
import { CardMedia, Divider, Rating, Box } from "@mui/material";

import {
  PropertyOwnerShortT,
  PropertyShortInfoT,
} from "interface/db/properties.types";

interface PropertyCardHorizontalT {
  property: PropertyShortInfoT;
}

const PropertyCardHorizontal: React.FC<PropertyCardHorizontalT> = ({
  property,
}) => {
  const ownerData: PropertyOwnerShortT = property.agent
    ? { ...property.agent, role: "AGENT" }
    : { ...property.owner, role: "USER" };

  return (
    <Link to={DYNAMIC_PATHS.property_page(property._id)} className="app__card">
      <MuiStyled.CardHorizontal>
        <CardMedia
          component="figure"
          className="image-placeholder cardThumbnail"
        >
          <Box
            component="img"
            width="100%"
            height="100%"
            loading="lazy"
            sx={{ minWidth: "100%", objectFit: "cover" }}
            title={property.title + " - image"}
            src={property.images[0]}
            alt={property.images[0]}
          />
        </CardMedia>

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
