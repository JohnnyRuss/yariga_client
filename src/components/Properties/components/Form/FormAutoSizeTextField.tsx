import React from "react";

import FormHelperText from "./FormHelperText";
import { FormControl, TextareaAutosize } from "@mui/material";

import {
  ReactHookFormFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/form";

interface FieldPropsT extends Omit<ReactHookFormFieldPropsT, "ref"> {
  ref: React.Ref<HTMLTextAreaElement> | undefined;
}

interface FormAutoSizeTextFieldT {
  fieldProps: FieldPropsT;
  fieldStateProps: ReactHookFormFieldStatePropsT;
  placeholder: string;
  required?: boolean;
  minRows?: number;
  maxRows?: number;
}

const FormAutoSizeTextField: React.FC<FormAutoSizeTextFieldT> = ({
  fieldProps,
  fieldStateProps,
  placeholder,
  required = true,
  minRows = 5,
  maxRows = 10,
}) => {
  return (
    <FormControl>
      <TextareaAutosize
        placeholder={placeholder}
        required={required}
        minRows={minRows}
        maxRows={maxRows}
        {...fieldProps}
        style={{
          maxWidth: "100%",
          background: "transparent",
          fontSize: "16px",
          borderColor: "rgba(0,0,0,0.23)",
          borderRadius: 6,
          padding: 10,
          color: "#919191",
          maxHeight: "300px",
          overflowY: "auto",
          resize: "none",
          fontStyle: "inherit",
          fontFamily: "inherit",
        }}
      />
      {fieldStateProps.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </FormControl>
  );
};

export default FormAutoSizeTextField;
