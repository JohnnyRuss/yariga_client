/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import {
  usePropertiesQuery,
  usePropertiesFilterQuery,
} from "hooks/api/properties";

import { AllProperties } from "components/Properties";
import PropertyFilterProvider from "providers/PropertyFilterProvider";

import { RouterHistory } from "config/config";
RouterHistory.redirectUnAuthorized();

const PropertiesPage: React.FC = () => {
  const { getAllProperties, cleanUpProperties } = usePropertiesQuery();
  const { cleanUpFilter, getPropertiesFilter } = usePropertiesFilterQuery();

  useEffect(() => {
    getAllProperties();
    getPropertiesFilter();

    return () => {
      cleanUpProperties();
      cleanUpFilter();
    };
  }, []);

  return (
    <PropertyFilterProvider>
      <AllProperties />
    </PropertyFilterProvider>
  );
};

export default PropertiesPage;
