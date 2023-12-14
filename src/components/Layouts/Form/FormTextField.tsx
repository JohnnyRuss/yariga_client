import { useState } from "react";

import {
  TextField,
  FormControl,
  InputAdornment,
  IconButton,
  AutocompleteRenderInputParams,
} from "@mui/material";
import FormHelperText from "./FormHelperText";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import {
  ReactHookFormTextFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/components/form.types";

interface FormTextFieldT {
  label: string;
  type?: string;
  required?: boolean;
  icon?: React.ReactNode | null;
  fieldProps: ReactHookFormTextFieldPropsT;
  fieldStateProps?: ReactHookFormFieldStatePropsT;
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
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl sx={{ flex: 1 }}>
      <TextField
        fullWidth
        required={required}
        variant="outlined"
        type={type !== "password" ? type : showPassword ? "text" : "password"}
        label={label}
        name={fieldProps.name}
        value={fieldProps.value}
        disabled={fieldProps.disabled}
        ref={fieldProps.ref}
        onChange={(e) => fieldProps.onChange(e.target.value)}
        onBlur={fieldProps.onBlur}
        {...autoCompleteParams}
        sx={{ background: "#fff" }}
        InputProps={{
          ...autoCompleteParams?.InputProps,
          startAdornment:
            type === "password" ? (
              <InputAdornment position="start">
                <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : icon ? (
              <InputAdornment position="start">{icon}</InputAdornment>
            ) : undefined,
        }}
      />

      {fieldStateProps?.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </FormControl>
  );
};

export default FormTextField;
