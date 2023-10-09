import React from "react";

import FormHelperText from "./FormHelperText";

import {
  ReactHookFormFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/form";

interface FormFileFieldT {
  fieldProps: ReactHookFormFieldPropsT;
  fieldStateProps: ReactHookFormFieldStatePropsT;
  label: string;
}

const FormFileField: React.FC<FormFileFieldT> = ({
  fieldProps,
  fieldStateProps,
  label,
}) => {
  return (
    <div>
      {label}
      {fieldStateProps.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </div>
  );
};

export default FormFileField;
