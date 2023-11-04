/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useAppDispatch } from "store/hooks";
import { propertiesActions } from "store/reducers/properties.reducer";
import { propertiesFilterActions } from "store/reducers/propertiesFilter.reducer";

import { AllProperties } from "components/Properties";
import PropertyFilterProvider from "providers/PropertyFilterProvider";

import { RouterHistory } from "config/config";
RouterHistory.redirectUnAuthorized();

const PropertiesPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(propertiesActions.getAllProperties({}));
    dispatch(propertiesFilterActions.getPropertyFilter());

    return () => {
      dispatch(propertiesFilterActions.cleanUpFilter());
      dispatch(propertiesActions.cleanUpAllProperties());
    };
  }, []);

  return (
    <PropertyFilterProvider>
      <AllProperties />
    </PropertyFilterProvider>
  );
};

export default PropertiesPage;
