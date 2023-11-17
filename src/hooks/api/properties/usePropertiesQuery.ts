import { useAppDispatch } from "store/hooks";
import { propertiesActions } from "store/reducers/properties.reducer";

import { GetAllPropertiesArgsT } from "interface/db/properties.types";

export default function useAllPropertiesQuery() {
  const dispatch = useAppDispatch();

  const getAllProperties = (args: GetAllPropertiesArgsT) =>
    dispatch(propertiesActions.getAllProperties(args));

  const cleanUpProperties = () =>
    dispatch(propertiesActions.cleanUpAllProperties());

  const getProperty = (propertyId: string) =>
    dispatch(propertiesActions.getProperty({ propertyId }));

  const cleanUpProperty = () => dispatch(propertiesActions.cleanUpProperty());

  return {
    getAllProperties,
    cleanUpProperties,
    getProperty,
    cleanUpProperty,
  };
}
