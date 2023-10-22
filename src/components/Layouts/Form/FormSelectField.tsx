import React from "react";

import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import FormHelperText from "./FormHelperText";

import {
  ReactHookFormSelectFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/components/form";

interface FormSelectFieldT {
  fieldProps: ReactHookFormSelectFieldPropsT;
  fieldStateProps?: ReactHookFormFieldStatePropsT;
  label: string;
  required?: boolean;
  list: Array<{
    _id: string;
    label: string;
    value: string;
  }>;
}

const FormSelectField: React.FC<FormSelectFieldT> = ({
  fieldProps,
  fieldStateProps,
  label,
  list,
  required = true,
}) => {
  function onChangeHandler(e: SelectChangeEvent) {
    const value = e.target.value;

    const selectedItem = list.find((item) => item._id === value);

    if (selectedItem) fieldProps.onChange(selectedItem);
  }

  return (
    <FormControl sx={{ flex: 1 }}>
      <InputLabel>{label}</InputLabel>

      <Select
        variant="outlined"
        required={required}
        ref={fieldProps.ref ? fieldProps.ref : null}
        name={fieldProps.name}
        value={fieldProps.value?._id ?? ""}
        onBlur={fieldProps.onBlur ? fieldProps.onBlur : () => {}}
        onChange={onChangeHandler}
        input={<OutlinedInput label={label} />}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: "350px",
              marginTop: "10px",
            },
            className: "custom_scrollbar",
          },
        }}
        sx={{ textTransform: "capitalize" }}
      >
        {list.map((type) => (
          <MenuItem
            key={type._id}
            value={type._id ?? ""}
            sx={{ textTransform: "capitalize" }}
          >
            {type.label}
          </MenuItem>
        ))}
      </Select>

      {fieldStateProps?.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </FormControl>
  );
};

export default FormSelectField;
