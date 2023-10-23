import React from "react";
import { useNavigate } from "react-router-dom";

import OtpInput from "react-otp-input";

import { Button } from "components/Layouts";
import * as UI from "./components";
import * as Form from "components/Layouts/Form";
import styles from "./components/auth.module.css";

const ConfirmEmail: React.FC = () => {
  const navigate = useNavigate();

  const onConfirm = () => navigate("/auth/update-password");

  return (
    <UI.AuthLayout
      mainText="Confirm your E-mail"
      secondaryText="PIN is valid for 10 minutes"
    >
      <form className={styles.authForm}>
        <div className={styles.otpField}>
          <OtpInput
            numInputs={6}
            // {...fieldProps}
            onChange={(value) => {}}
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

        <Button
          onClick={onConfirm}
          fullWidth={true}
          bgColor="app_blue.light"
          color="app_text.light"
          title="Confirm"
        />
      </form>
    </UI.AuthLayout>
  );
};

export default ConfirmEmail;
