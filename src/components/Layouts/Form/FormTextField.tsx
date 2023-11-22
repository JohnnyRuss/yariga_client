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
  return (
    <FormControl sx={{ flex: 1 }}>
      <TextField
        fullWidth
        required={required}
        variant="outlined"
        type={type}
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
          startAdornment: icon ? (
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
