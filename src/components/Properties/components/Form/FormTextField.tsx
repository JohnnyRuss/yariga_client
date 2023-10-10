import React from "react";

import FormHelperText from "./FormHelperText";
import { FormControl, TextField } from "@mui/material";

import {
  ReactHookFormFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/form";

interface FormTextFieldT {
  fieldProps: ReactHookFormFieldPropsT;
  fieldStateProps: ReactHookFormFieldStatePropsT;
  label: string;
  required?: boolean;
}

const FormTextField: React.FC<FormTextFieldT> = ({
  fieldProps,
  fieldStateProps,
  label,
  required = true,
}) => {
  return (
    <FormControl>
      <TextField
        fullWidth
        required={required}
        variant="outlined"
        label={label}
        {...fieldProps}
        sx={{ background: "#fff" }}
      />

      {fieldStateProps.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </FormControl>
  );
};

export default FormTextField;
