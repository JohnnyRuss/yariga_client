import React from "react";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import FormHelperText from "./FormHelperText";

import {
  ReactHookFormFieldStatePropsT,
  ReactHookFormMultipleSelectFieldPropsT,
} from "interface/components/form";

interface FormMultipleSelectFieldT {
  fieldProps: ReactHookFormMultipleSelectFieldPropsT;
  fieldStateProps: ReactHookFormFieldStatePropsT;
  label: string;
  list: Array<{
    _id: string;
    label: string;
    value: string;
  }>;
}

const FormMultipleSelectField: React.FC<FormMultipleSelectFieldT> = ({
  list,
  label,
  fieldProps,
  fieldStateProps,
}) => {
  const handleChange = (e: SelectChangeEvent<typeof fieldProps.value>) => {
    const values = e.target.value;
    const itemId = values[values.length - 1];

    const selectedItem = list.find((item) => item._id === itemId);

    const isExistingSelection = fieldProps.value.some(
      (v) => v.value === selectedItem?.value
    );

    const valueToSet = isExistingSelection
      ? fieldProps.value.filter((v) => v.value !== selectedItem?.value)
      : [...fieldProps.value, selectedItem];

    if (selectedItem) fieldProps.onChange(valueToSet);
  };

  return (
    <FormControl sx={{ flex: 1 }}>
      <InputLabel>{label}</InputLabel>

      <Select
        multiple
        ref={fieldProps.ref}
        name={fieldProps.name}
        onBlur={fieldProps.onBlur}
        value={fieldProps.value}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => selected.map((v) => v.label).join(", ")}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: "350px",
              marginTop: "10px",
            },
            className: "custom_scrollbar",
          },
        }}
        sx={{ background: "#fff" }}
      >
        {list.map((item) => (
          <MenuItem key={item._id} value={item._id}>
            <Checkbox
              checked={(fieldProps.value ?? []).some(
                (v) => v.value === item.value
              )}
            />
            <ListItemText
              primary={item.label}
              sx={{ textTransform: "capitalize" }}
            />
          </MenuItem>
        ))}
      </Select>

      {fieldStateProps.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </FormControl>
  );
};

export default FormMultipleSelectField;
