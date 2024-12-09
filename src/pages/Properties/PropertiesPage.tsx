/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

import {
  usePropertiesQuery,
  usePropertiesFilterQuery,
} from "hooks/api/properties";
import Helmet from "pages/Helmet";
import { PATHS } from "config/paths";
import { useScrollTo } from "hooks/utils";
import { useRedirectUnAuthorized } from "hooks/auth";
import PropertyFilterProvider from "providers/FilterProvider/PropertyFilterProvider";

import { Spinner } from "components/Layouts";
import AppLayout from "components/AppLayout/AppLayout";
const AllProperties = lazy(
  () => import("components/Properties/AllProperties/AllProperties")
);

const PropertiesPage: React.FC = () => {
  const { windowScrollToTop } = useScrollTo();

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
      windowScrollToTop();
    }, 1000);

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
        <Suspense fallback={<Spinner />}>
          <PropertyFilterProvider>
            <AllProperties />
          </PropertyFilterProvider>
        </Suspense>
      </AppLayout>
    </>
  );
};

export default PropertiesPage;
