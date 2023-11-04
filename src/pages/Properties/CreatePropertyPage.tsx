/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useAppDispatch } from "store/hooks";

import { RouterHistory } from "config/config";
import { createPropertyFormActions } from "store/reducers/createPropertyForm.reducer";

import { CreateProperty } from "components/Properties";

RouterHistory.redirectUnAuthorized();

const CreatePropertyPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(createPropertyFormActions.getPropertyFormSuggestions());

    return () => {
      dispatch(createPropertyFormActions.cleanUpPropertySuggestions());
    };
  }, []);

  return <CreateProperty />;
};

export default CreatePropertyPage;
