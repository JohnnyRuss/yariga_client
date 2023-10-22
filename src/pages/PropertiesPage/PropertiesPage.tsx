/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useAppDispatch } from "store/hooks";
import { propertiesActions } from "store/reducers/properties.reducer";

import { AllProperties } from "components/Properties";

import { RouterHistory } from "config/config";
RouterHistory.redirectUnAuthorized();

const PropertiesPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(propertiesActions.getAllProperties({}));
    dispatch(propertiesActions.getPropertyFilter());
  }, []);

  return <AllProperties />;
};

export default PropertiesPage;
