/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "store/hooks";

import { RouterHistory } from "config/config";
import { propertiesActions } from "store/reducers/properties.reducer";
import { roomTypesActions } from "store/reducers/roomTypes.reducer";

import { Property } from "components/Properties";

RouterHistory.redirectUnAuthorized();

const PropertyPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { propertyId } = useParams();

  useEffect(() => {
    if (!propertyId) return;

    dispatch(propertiesActions.getProperty({ propertyId }));
  }, [propertyId]);

  useEffect(() => {
    dispatch(roomTypesActions.getAllRoomTypes());

    return () => {
      dispatch(roomTypesActions.cleanUpRoomTypes());
      dispatch(propertiesActions.cleanUpProperty());
    };
  }, []);

  return <Property />;
};

export default PropertyPage;
