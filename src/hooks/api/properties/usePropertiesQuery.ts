import { useAppDispatch } from "store/hooks";
import { propertiesActions } from "store/reducers/properties.reducer";

import {
  GetAllPropertiesArgsT,
  GetRelatedPropertiesArgsT,
} from "interface/db/properties.types";

export default function usePropertiesQuery() {
  const dispatch = useAppDispatch();

  const getAllProperties = (args: GetAllPropertiesArgsT) =>
    dispatch(propertiesActions.getAllProperties(args));

  const cleanUpProperties = () =>
    dispatch(propertiesActions.cleanUpAllProperties());

  const getProperty = (propertyId: string) =>
    dispatch(propertiesActions.getProperty({ propertyId }));

  const cleanUpProperty = () => dispatch(propertiesActions.cleanUpProperty());

  const getRelatedProperties = (args: GetRelatedPropertiesArgsT) =>
    dispatch(propertiesActions.getRelatedProperties(args));

  const cleanUpRelatedProperties = () =>
    dispatch(propertiesActions.cleanUpRelatedProperties());

  return {
    getAllProperties,
    cleanUpProperties,
    getProperty,
    cleanUpProperty,
    getRelatedProperties,
    cleanUpRelatedProperties,
  };
}
