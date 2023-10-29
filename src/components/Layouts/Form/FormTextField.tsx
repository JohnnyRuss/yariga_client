import React from "react";

import {
  TextField,
  FormControl,
  InputAdornment,
  AutocompleteRenderInputParams,
} from "@mui/material";
import FormHelperText from "./FormHelperText";

import {
  ReactHookFormTextFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/components/form";

interface FormTextFieldT {
  fieldProps: ReactHookFormTextFieldPropsT;
  fieldStateProps?: ReactHookFormFieldStatePropsT;
  label: string;
  required?: boolean;
  type?: string;
  icon?: React.ReactNode | null;
  autoCompleteParams?: AutocompleteRenderInputParams;
}

const FormTextField: React.FC<FormTextFieldT> = ({
  label,
  icon,
  type = "text",
  fieldProps,
  fieldStateProps,
  required = false,
  autoCompleteParams,
}) => {
  return (
    <FormControl sx={{ flex: 1 }}>
      <TextField
        fullWidth
        required={required}
        variant="outlined"
        type={type}
        label={label}
        {...autoCompleteParams}
        name={fieldProps.name}
        value={fieldProps.value}
        disabled={fieldProps.disabled}
        ref={fieldProps.ref}
        onChange={(e) => fieldProps.onChange(e.target.value)}
        onBlur={fieldProps.onBlur}
        sx={{ background: "#fff" }}
        InputProps={
          icon
            ? {
                startAdornment: (
                  <InputAdornment position="start">{icon}</InputAdornment>
                ),
              }
            : undefined
        }
      />

      {fieldStateProps?.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </FormControl>
  );
};

export default FormTextField;
