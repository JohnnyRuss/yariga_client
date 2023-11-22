import { useAppDispatch } from "store/hooks";
import { propertiesActions } from "store/reducers/properties.reducer";
import { SetStatusArgsT } from "store/reducers/helpers/controlStatus";

import {
  GetAllPropertiesArgsT,
  GetRelatedPropertiesArgsT,
  GetUserPropertiesArgsT,
  GetAgentPropertiesArgsT,
} from "interface/db/properties.types";

export default function usePropertiesQuery() {
  const dispatch = useAppDispatch();

  // ALL PROPERTIES
  const setAllPropertiesStatus = (args: SetStatusArgsT) =>
    dispatch(propertiesActions.setAllPropertiesStatus(args));

  const getAllProperties = (args: GetAllPropertiesArgsT) =>
    dispatch(propertiesActions.getAllProperties(args));

  const cleanUpProperties = () =>
    dispatch(propertiesActions.cleanUpAllProperties());

  // PROPERTY
  const getProperty = (propertyId: string) =>
    dispatch(propertiesActions.getProperty({ propertyId }));

  const cleanUpProperty = () => dispatch(propertiesActions.cleanUpProperty());

  // RELATED PROPERTIES
  const getRelatedProperties = (args: GetRelatedPropertiesArgsT) =>
    dispatch(propertiesActions.getRelatedProperties(args));

  const cleanUpRelatedProperties = () =>
    dispatch(propertiesActions.cleanUpRelatedProperties());

  // USER PROPERTIES
  const getUserProperties = (args: GetUserPropertiesArgsT) =>
    dispatch(propertiesActions.getUserProperties(args));

  const cleanUpUserProperties = () =>
    dispatch(propertiesActions.cleanUpUserProperties());

  // AGENT PROPERTIES
  const getAgentProperties = (args: GetAgentPropertiesArgsT) =>
    dispatch(propertiesActions.getAgentProperties(args));

  const cleanUpAgentProperties = () =>
    dispatch(propertiesActions.cleanUpAgentProperties());

  return {
    setAllPropertiesStatus,
    getAllProperties,
    cleanUpProperties,
    getProperty,
    cleanUpProperty,
    getRelatedProperties,
    cleanUpRelatedProperties,
    getUserProperties,
    cleanUpUserProperties,
    getAgentProperties,
    cleanUpAgentProperties,
  };
}
