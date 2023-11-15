import { useAppDispatch } from "store/hooks";
import { propertiesActions } from "store/reducers/properties.reducer";

import { RatePropertyArgsT } from "interface/db/properties.types";

export default function usePropertyRatingQuery() {
  const dispatch = useAppDispatch();

  const rateProperty = ({ propertyId, data }: RatePropertyArgsT) => {
    if (!propertyId || !data.score || isNaN(data.score)) return;
    dispatch(propertiesActions.rateProperty({ propertyId, data }));
  };

  return { rateProperty };
}
