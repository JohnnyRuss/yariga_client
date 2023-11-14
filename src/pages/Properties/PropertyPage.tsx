/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { RouterHistory } from "config/config";
import { usePropertiesQuery, useRoomTypesQuery } from "hooks/api/properties";

import { Property } from "components/Properties";

RouterHistory.redirectUnAuthorized();

const PropertyPage: React.FC = () => {
  const { propertyId } = useParams();

  const { getProperty, cleanUpProperty } = usePropertiesQuery();
  const { getRoomTypes, cleanUpRoomTypes } = useRoomTypesQuery();

  useEffect(() => {
    if (!propertyId) return;
    getRoomTypes();
    getProperty(propertyId);

    return () => {
      cleanUpRoomTypes();
      cleanUpProperty();
    };
  }, [propertyId]);

  return <Property />;
};

export default PropertyPage;
