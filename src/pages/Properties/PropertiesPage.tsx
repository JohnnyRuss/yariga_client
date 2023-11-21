/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "store/hooks";

import {
  usePropertiesQuery,
  usePropertiesFilterQuery,
} from "hooks/api/properties";
import { propertiesActions } from "store/reducers/properties.reducer";

import { AllProperties } from "components/Properties";
import PropertyFilterProvider from "providers/FilterProvider/PropertyFilterProvider";

import { RouterHistory } from "config/config";
RouterHistory.redirectUnAuthorized();

const PropertiesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { search } = useLocation();

  const { getAllProperties, cleanUpProperties } = usePropertiesQuery();
  const { cleanUpFilter, getPropertiesFilter } = usePropertiesFilterQuery();

  useEffect(() => {
    dispatch(propertiesActions.setAllPropertiesStatus({ stage: "loading" }));
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
