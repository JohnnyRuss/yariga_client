/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  usePropertiesQuery,
  usePropertiesFilterQuery,
} from "hooks/api/properties";

import { AllProperties } from "components/Properties";
import PropertyFilterProvider from "providers/PropertyFilterProvider";

import { RouterHistory } from "config/config";
RouterHistory.redirectUnAuthorized();

const PropertiesPage: React.FC = () => {
  const { search } = useLocation();

  const { getAllProperties, cleanUpProperties } = usePropertiesQuery();
  const { cleanUpFilter, getPropertiesFilter } = usePropertiesFilterQuery();

  useEffect(() => {
    getPropertiesFilter();

    return () => {
      cleanUpFilter();
    };
  }, []);

  useEffect(() => {
    getAllProperties({ query: search });

    return () => {
      cleanUpProperties();
    };
  }, [search]);

  return (
    <PropertyFilterProvider>
      <AllProperties />
    </PropertyFilterProvider>
  );
};

export default PropertiesPage;
