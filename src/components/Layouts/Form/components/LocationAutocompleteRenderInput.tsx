import React from "react";

import { AutocompleteRenderInputParams } from "@mui/material";
import FormHelperText from "../FormHelperText";
import FormTextField from "../FormTextField";

import {
  ReactHookFormLocationFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/components/form";

interface LocationAutocompleteRenderInputT {
  params: AutocompleteRenderInputParams;
  fieldProps: ReactHookFormLocationFieldPropsT;
  fieldStateProps: ReactHookFormFieldStatePropsT;
  locationSearch: string;
  setLocationSearch: React.Dispatch<React.SetStateAction<string>>;
}

const LocationAutocompleteRenderInput: React.FC<
  LocationAutocompleteRenderInputT
> = ({
  params,
  fieldProps,
  fieldStateProps,
  locationSearch,
  setLocationSearch,
}) => {
  return (
    <>
      <FormTextField
        autoCompleteParams={params}
        fieldProps={{
          ...fieldProps,
          value: locationSearch,
          onChange: (value) => setLocationSearch(value),
        }}
        fieldStateProps={fieldStateProps}
        label="Location"
      />

      {fieldStateProps.error && (
        <FormHelperText text="Please provide us property location" />
      )}
    </>
  );
};

export default LocationAutocompleteRenderInput;
