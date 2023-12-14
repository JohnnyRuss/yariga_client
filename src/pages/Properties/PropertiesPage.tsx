/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Helmet from "pages/Helmet";
import { useLocation } from "react-router-dom";

import {
  usePropertiesQuery,
  usePropertiesFilterQuery,
} from "hooks/api/properties";
import { PATHS } from "config/paths";
import { useRedirectUnAuthorized } from "hooks/auth";
import PropertyFilterProvider from "providers/FilterProvider/PropertyFilterProvider";

import { AllProperties } from "components/Properties";
import AppLayout from "components/AppLayout/AppLayout";

const PropertiesPage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

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

  return loading ? (
    <></>
  ) : (
    <>
      <Helmet
        title="Properties"
        path={PATHS.properties_page}
        description="Yariga properties listing presentation with basic details of each property. Filter, sort and search properties you are looking for."
      />

      <AppLayout>
        <PropertyFilterProvider>
          <AllProperties />
        </PropertyFilterProvider>
      </AppLayout>
    </>
  );
};

export default PropertiesPage;
