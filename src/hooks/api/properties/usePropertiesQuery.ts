import { useAppDispatch } from "store/hooks";
import { propertiesActions } from "store/reducers/properties.reducer";

export default function useAllPropertiesQuery() {
  const dispatch = useAppDispatch();

  const getAllProperties = () =>
    dispatch(propertiesActions.getAllProperties({}));

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
