import { LoadingStatusT } from "./common.types";
import { PropertyT, PropertyShortInfoT } from "interface/db/properties.types";

type PropertiesStateT = {
  // STATUS
  singlePropertyStatus: LoadingStatusT;
  allPropertiesStatus: LoadingStatusT;
  userPropertiesStatus: LoadingStatusT;
  agentPropertiesStatus: LoadingStatusT;
  relatedPropertiesStatus: LoadingStatusT;
  // CONTENT DATA
  property: PropertyT;
  properties: Array<PropertyShortInfoT>;
  currentPage: number;
  pagesCount: number;
  agentProperties: Array<PropertyShortInfoT>;
  userProperties: Array<PropertyShortInfoT>;
  relatedProperties: Array<PropertyShortInfoT>;
};

export type { PropertiesStateT };
