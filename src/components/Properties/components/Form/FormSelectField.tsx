import React from "react";

import { PROPERTY_TYPES } from "config/constants";

import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import FormHelperText from "./FormHelperText";

import {
  ReactHookFormFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/components/form";

interface FieldPropsT extends Omit<ReactHookFormFieldPropsT, "onChange"> {
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
}

interface FormSelectFieldT {
  fieldProps: FieldPropsT;
  fieldStateProps: ReactHookFormFieldStatePropsT;
  label: string;
  required?: boolean;
}

const FormSelectField: React.FC<FormSelectFieldT> = ({
  fieldProps,
  fieldStateProps,
  label,
  required = true,
}) => {
  return (
    <FormControl sx={{ flex: 1 }}>
      <Select
        variant="outlined"
        required={required}
        label={label}
        defaultValue={PROPERTY_TYPES[0].value}
        ref={fieldProps.ref}
        name={fieldProps.name}
        onBlur={fieldProps.onBlur}
        onChange={fieldProps.onChange}
        sx={{
          background: "#fff",
          "& fieldset legend": { height: "20px" },
          "& fieldset span": { opacity: 1 },
        }}
      >
        {PROPERTY_TYPES.map((type) => (
          <MenuItem key={type.id} value={type.value}>
            {type.label}
          </MenuItem>
        ))}
      </Select>

      {fieldStateProps.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </FormControl>
  );
};

export default FormSelectField;
