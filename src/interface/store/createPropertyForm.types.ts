import { LoadingStatusT } from "./common.types";
import { PropertySuggestionsT } from "interface/db/createProperty.types";

export interface CreatePropertyFormStateT {
  suggestions: PropertySuggestionsT;
  status: LoadingStatusT;
}
