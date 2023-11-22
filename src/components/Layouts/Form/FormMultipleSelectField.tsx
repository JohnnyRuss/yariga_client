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
} from "interface/components/form.types";

interface FormMultipleSelectFieldT {
  list: Array<{
    _id: string;
    label: string;
    value: string;
  }>;
  label: string;
  passEvent?: boolean;
  fieldStateProps?: ReactHookFormFieldStatePropsT;
  fieldProps: ReactHookFormMultipleSelectFieldPropsT;
}

const FormMultipleSelectField: React.FC<FormMultipleSelectFieldT> = ({
  list,
  label,
  fieldProps,
  fieldStateProps,
  passEvent = false,
}) => {
  const handleChange = (e: SelectChangeEvent<typeof fieldProps.value>) => {
    const values = e.target.value;
    const itemId = values[values.length - 1];

    const selectedItem = list.find((item) => item._id === itemId);

    if (!selectedItem) return;

    const isExistingSelection = fieldProps.value.some(
      (v) => v.value === selectedItem?.value
    );

    const valueToSet = isExistingSelection
      ? fieldProps.value.filter((v) => v.value !== selectedItem.value)
      : [...fieldProps.value, selectedItem];

    passEvent
      ? fieldProps.onChange(valueToSet, e)
      : fieldProps.onChange(valueToSet);
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
            sx: {
              maxHeight: "350px",
              marginTop: "10px",

              ul: {
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              },
            },
            className: "custom_scrollbar",
          },
        }}
        sx={{ background: "#fff" }}
      >
        {list.map((item) => {
          const checked = (fieldProps.value ?? []).some(
            (v) => v.value === item.value
          );

          return (
            <MenuItem
              key={item._id}
              value={item._id}
              sx={{
                backgroundColor: checked ? "app_blue.light" : "initial",
                color: checked ? "app_text.light" : "initial",

                "&:hover": {
                  backgroundColor: checked ? "app_blue.light" : "initial",
                  color: checked ? "app_text.light" : "initial",
                },
              }}
            >
              <Checkbox
                checked={checked}
                sx={{
                  "& .MuiSvgIcon-root": {
                    color: "app_text.light",
                  },
                }}
              />
              <ListItemText
                primary={item.label}
                sx={{ textTransform: "capitalize" }}
              />
            </MenuItem>
          );
        })}
      </Select>

      {fieldStateProps?.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </FormControl>
  );
};

export default FormMultipleSelectField;
