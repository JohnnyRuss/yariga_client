import React from "react";
import OtpInput from "react-otp-input";

import styles from "./form.module.css";
import FormHelperText from "./FormHelperText";

import {
  ReactHookFormTextFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/components/form";

interface FormOTPFieldT {
  fieldProps: ReactHookFormTextFieldPropsT;
  fieldStateProps?: ReactHookFormFieldStatePropsT;
  label: string;
}

const FormOTPField: React.FC<FormOTPFieldT> = ({
  fieldProps,
  fieldStateProps,
  label,
}) => {
  return (
    <div className={styles.otpFieldContainer}>
      <label htmlFor="">{label}</label>

      <div className={styles.otpField}>
        <OtpInput
          numInputs={6}
          {...fieldProps}
          renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
          renderInput={(props) => (
            <input
              {...{
                ...props,
                // ref,
                type: "number",
                className: styles["otp-inp"],
                placeholder: "*",
              }}
            />
          )}
        />
      </div>

      {fieldStateProps?.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </div>
  );
};

export default FormOTPField;
