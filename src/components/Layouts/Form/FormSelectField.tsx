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
} from "interface/components/form.types";

interface FormSelectFieldT {
  list: Array<{
    _id: string;
    label: string;
    value: string;
  }>;
  label: string;
  required?: boolean;
  passEvent?: boolean;
  fieldProps: ReactHookFormSelectFieldPropsT;
  fieldStateProps?: ReactHookFormFieldStatePropsT;
}

const FormSelectField: React.FC<FormSelectFieldT> = ({
  list,
  label,
  fieldProps,
  fieldStateProps,
  passEvent = false,
  required = true,
}) => {
  function onChangeHandler(e: SelectChangeEvent) {
    const value = e.target.value;

    const selectedItem = list.find((item) => item._id === value);

    if (selectedItem)
      passEvent
        ? fieldProps.onChange(selectedItem, e)
        : fieldProps.onChange(selectedItem);
  }

  return (
    <FormControl sx={{ flex: 1, flexBasis: ["none", "none", "140px"] }}>
      <InputLabel>{label}</InputLabel>

      <Select
        variant="outlined"
        required={required}
        displayEmpty={true}
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
            onClick={() => {
              passEvent &&
                type.value === fieldProps.value.value &&
                fieldProps.onChange(type, null, fieldProps.name);
            }}
            key={type._id}
            value={type._id ?? ""}
            sx={{
              textTransform: "capitalize",
              "&.Mui-selected": {
                backgroundColor: "app_blue.light",
                color: "app_text.light",

                "&:hover": {
                  backgroundColor: "app_blue.light",
                  color: "app_text.light",
                },
              },
            }}
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
