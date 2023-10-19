import React from "react";

import {
  FormControl,
  TextField,
  AutocompleteRenderInputParams,
} from "@mui/material";
import FormHelperText from "./FormHelperText";

import {
  ReactHookFormFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/components/form";

interface FormTextFieldT {
  fieldProps: ReactHookFormFieldPropsT;
  fieldStateProps: ReactHookFormFieldStatePropsT;
  label: string;
  required?: boolean;
  autoCompleteParams?: AutocompleteRenderInputParams;
}

const FormTextField: React.FC<FormTextFieldT> = ({
  fieldProps,
  fieldStateProps,
  label,
  required = false,
  autoCompleteParams,
}) => {
  return (
    <FormControl>
      <TextField
        fullWidth
        required={required}
        variant="outlined"
        label={label}
        {...fieldProps}
        {...autoCompleteParams}
        sx={{ background: "#fff" }}
      />

      {fieldStateProps.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </FormControl>
  );
};

export default FormTextField;
