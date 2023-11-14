import { useAppDispatch } from "store/hooks";
import { propertiesActions } from "store/reducers/properties.reducer";

import { RatePropertyArgsT } from "interface/db/properties.types";

export default function usePropertyRatingQuery() {
  const dispatch = useAppDispatch();

  const rateProperty = ({ propertyId, score }: RatePropertyArgsT) =>
    dispatch(propertiesActions.rateProperty({ propertyId, score }));

  return { rateProperty };
}
