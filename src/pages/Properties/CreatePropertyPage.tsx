/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, lazy, Suspense } from "react";
import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { useRedirectUnAuthorized } from "hooks/auth";
import { usePropertyFormSuggestionsQuery } from "hooks/api/properties";

import { Spinner } from "components/Layouts";
import AppLayout from "components/AppLayout/AppLayout";
const CreateProperty = lazy(
  () => import("components/Properties/CreateProperty/CreateProperty")
);

const CreatePropertyPage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

  const { cleanUpSuggestions, getSuggestions } =
    usePropertyFormSuggestionsQuery();

  useEffect(() => {
    getSuggestions();

    return () => {
      cleanUpSuggestions();
    };
  }, []);

  return loading ? (
    <></>
  ) : (
    <>
      <Helmet
        title="Add Property"
        disAllowCrawler={true}
        path={PATHS.create_property_page}
        description="Add your properties at Yariga for rent or sale. Hire agents."
      />

      <AppLayout>
        <Suspense fallback={<Spinner />}>
          <CreateProperty />
        </Suspense>
      </AppLayout>
    </>
  );
};

export default CreatePropertyPage;
