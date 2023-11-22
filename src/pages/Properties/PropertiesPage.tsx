/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  usePropertiesQuery,
  usePropertiesFilterQuery,
} from "hooks/api/properties";

import { RouterHistory } from "config/config";
import { AllProperties } from "components/Properties";
import PropertyFilterProvider from "providers/FilterProvider/PropertyFilterProvider";

RouterHistory.redirectUnAuthorized();

const PropertiesPage: React.FC = () => {
  const { search } = useLocation();

  const { getAllProperties, cleanUpProperties, setAllPropertiesStatus } =
    usePropertiesQuery();
  const { cleanUpFilter, getPropertiesFilter } = usePropertiesFilterQuery();

  useEffect(() => {
    setAllPropertiesStatus({ stage: "loading" });
    getPropertiesFilter();

    return () => {
      cleanUpFilter();
      cleanUpProperties();
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getAllProperties({ query: search });
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  return (
    <PropertyFilterProvider>
      <AllProperties />
    </PropertyFilterProvider>
  );
};

export default PropertiesPage;
