import { LoadingStatusT } from "./common.types";
import { StateReviewT } from "./review.types";
import { PropertyT, PropertyShortInfoT } from "interface/db/properties.types";

type PropertiesStateT = {
  // STATUS
  singlePropertyStatus: LoadingStatusT;
  allPropertiesStatus: LoadingStatusT;
  userPropertiesStatus: LoadingStatusT;
  agentPropertiesStatus: LoadingStatusT;
  relatedPropertiesStatus: LoadingStatusT;
  deletePropertiesStatus: LoadingStatusT;
  // CONTENT DATA
  property: StatePropertyT;
  properties: Array<PropertyShortInfoT>;
  currentPage: number;
  pagesCount: number;
  agentProperties: Array<PropertyShortInfoT>;
  userProperties: Array<PropertyShortInfoT>;
  relatedProperties: Array<PropertyShortInfoT>;
};

type StatePropertyT = Omit<PropertyT, "reviews"> & {
  reviews: Array<StateReviewT>;
};

export type { PropertiesStateT };
