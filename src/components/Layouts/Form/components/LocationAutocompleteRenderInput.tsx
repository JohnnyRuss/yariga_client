import React from "react";

import FormHelperText from "../FormHelperText";
import FormTextField from "../FormTextField";
import { LocationOn } from "@mui/icons-material";
import { AutocompleteRenderInputParams } from "@mui/material";

import {
  ReactHookFormLocationFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/components/form";

interface LocationAutocompleteRenderInputT {
  showIcon?: boolean;
  locationSearch: string;
  params: AutocompleteRenderInputParams;
  fieldProps: ReactHookFormLocationFieldPropsT;
  fieldStateProps?: ReactHookFormFieldStatePropsT;
  setLocationSearch: React.Dispatch<React.SetStateAction<string>>;
}

const LocationAutocompleteRenderInput: React.FC<
  LocationAutocompleteRenderInputT
> = ({
  params,
  showIcon,
  fieldProps,
  fieldStateProps,
  locationSearch,
  setLocationSearch,
}) => {
  return (
    <>
      <FormTextField
        fieldProps={{
          ...fieldProps,
          value: locationSearch,
          onChange: (value) => setLocationSearch(value),
        }}
        label="Location"
        autoCompleteParams={params}
        fieldStateProps={fieldStateProps}
        icon={showIcon ? <LocationOn /> : null}
      />

      {fieldStateProps?.error && (
        <FormHelperText text="Please provide us property location" />
      )}
    </>
  );
};

export default LocationAutocompleteRenderInput;
