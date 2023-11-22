import FormHelperText from "./FormHelperText";
import { FormControl, TextField } from "@mui/material";

import {
  ReactHookFormTextFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/components/form.types";

interface FormAutoSizeTextFieldT {
  label: string;
  required?: boolean;
  minRows?: number;
  maxRows?: number;
  fieldProps: ReactHookFormTextFieldPropsT;
  fieldStateProps: ReactHookFormFieldStatePropsT;
}

const FormAutoSizeTextField: React.FC<FormAutoSizeTextFieldT> = ({
  fieldProps,
  fieldStateProps,
  label,
  required = false,
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
        inputProps={{
          className: "custom_scrollbar",
        }}
        sx={{ background: "#fff" }}
        name={fieldProps.name}
        value={fieldProps.value}
        disabled={fieldProps.disabled}
        ref={fieldProps.ref}
        onChange={(e) => fieldProps.onChange(e.target.value)}
        onBlur={fieldProps.onBlur}
      />

      {fieldStateProps.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </FormControl>
  );
};

export default FormAutoSizeTextField;
