/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { RouterHistory } from "config/config";
import { useScrollTo } from "hooks/utils";
import { usePropertiesQuery, useRoomTypesQuery } from "hooks/api/properties";

import { Property } from "components/Properties";

RouterHistory.redirectUnAuthorized();

const PropertyPage: React.FC = () => {
  const { propertyId } = useParams();

  const { windowScrollToTop } = useScrollTo();

  const { getProperty, cleanUpProperty } = usePropertiesQuery();
  const { getRoomTypes, cleanUpRoomTypes } = useRoomTypesQuery();

  useEffect(() => {
    if (!propertyId) return;

    windowScrollToTop();

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
