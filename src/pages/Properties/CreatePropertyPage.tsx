/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { PATHS } from "config/paths";
import { useRedirectUnAuthorized } from "hooks/auth";
import { usePropertyFormSuggestionsQuery } from "hooks/api/properties";

import Helmet from "pages/Helmet";
import AppLayout from "components/AppLayout/AppLayout";
import { CreateProperty } from "components/Properties";

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
        <CreateProperty />
      </AppLayout>
    </>
  );
};

export default CreatePropertyPage;
