/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { useAppDispatch } from "store/hooks";
import { propertiesActions } from "store/reducers/properties.reducer";

import { RouterHistory } from "config/config";
import { CreateProperty } from "components/Properties";

RouterHistory.redirectUnAuthorized();

const CreatePropertyPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(propertiesActions.getPropertyFormSuggestions());
  }, []);

  return <CreateProperty />;
};

export default CreatePropertyPage;
