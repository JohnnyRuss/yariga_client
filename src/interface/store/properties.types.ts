import { LoadingStatusT } from "./common.types";
import { PropertyT, PropertyShortInfoT } from "interface/db/properties.types";

export interface PropertiesStateT {
  // STATUS
  singlePropertyStatus: LoadingStatusT;
  allPropertiesStatus: LoadingStatusT;
  userPropertiesStatus: LoadingStatusT;
  agentPropertiesStatus: LoadingStatusT;
  // CONTENT DATA
  property: PropertyT;
  properties: Array<PropertyShortInfoT>;
  agentProperties: Array<PropertyShortInfoT>;
  userProperties: Array<PropertyShortInfoT>;
}
