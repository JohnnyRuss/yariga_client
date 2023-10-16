import React from "react";

import FormHelperText from "./FormHelperText";
import {
  FormControl,
  TextField,
  AutocompleteRenderInputParams,
} from "@mui/material";

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
  required = true,
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
