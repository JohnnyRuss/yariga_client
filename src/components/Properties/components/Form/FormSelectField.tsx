import React from "react";

import { PropertyTypes } from "config/constants";

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
} from "interface/form";

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
        displayEmpty
        required={required}
        inputProps={{ "aria-label": "Without label" }}
        defaultValue="apartment"
        label={label}
        {...fieldProps}
      >
        {PropertyTypes.map((type) => (
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
