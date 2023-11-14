/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

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

  return <CreateProperty />;
};

export default CreatePropertyPage;
