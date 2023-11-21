import { LoadingStatusT } from "./common.types";
import { PropertySuggestionsT } from "interface/db/createProperty.types";

type CreatePropertyFormStateT = {
  suggestions: PropertySuggestionsT;
  status: LoadingStatusT;
};

export type { CreatePropertyFormStateT };
