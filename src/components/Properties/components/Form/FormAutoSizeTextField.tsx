import React from "react";

import FormHelperText from "./FormHelperText";
import { FormControl, TextField } from "@mui/material";

import {
  ReactHookFormFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/components/form";

interface FormAutoSizeTextFieldT {
  fieldProps: ReactHookFormFieldPropsT;
  fieldStateProps: ReactHookFormFieldStatePropsT;
  label: string;
  required?: boolean;
  minRows?: number;
  maxRows?: number;
}

const FormAutoSizeTextField: React.FC<FormAutoSizeTextFieldT> = ({
  fieldProps,
  fieldStateProps,
  label,
  required = true,
  minRows = 5,
  maxRows = 10,
}) => {
  return (
    <FormControl>
      <TextField
        label={label}
        required={required}
        multiline
        minRows={minRows}
        maxRows={maxRows}
        sx={{ background: "#fff" }}
        {...fieldProps}
      />

      {fieldStateProps.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </FormControl>
  );
};

export default FormAutoSizeTextField;
