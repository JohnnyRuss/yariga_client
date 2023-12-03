/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/config";
import { usePropertyFormSuggestionsQuery } from "hooks/api/properties";

import { CreateProperty } from "components/Properties";

RouterHistory.redirectUnAuthorized();

const CreatePropertyPage: React.FC = () => {
  const { cleanUpSuggestions, getSuggestions } =
    usePropertyFormSuggestionsQuery();

  useEffect(() => {
    getSuggestions();

    return () => {
      cleanUpSuggestions();
    };
  }, []);

  return (
    <>
      <Helmet
        title="Add Property"
        disAllowCrawler={true}
        path={PATHS.create_property_page}
        description="Add your properties at Yariga for rent or sale. Hire agents."
      />

      <CreateProperty />
    </>
  );
};

export default CreatePropertyPage;
