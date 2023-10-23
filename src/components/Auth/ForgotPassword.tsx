import React from "react";
import { useNavigate } from "react-router-dom";

import * as UI from "./components";
import * as Form from "components/Layouts/Form";
import { Button } from "components/Layouts";
import styles from "./components/auth.module.css";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const onConfirm = () => navigate("/auth/confirm-email");

  return (
    <UI.AuthLayout
      mainText="Forgot Password"
      secondaryText="Password reset PIN will be sent to your email"
    >
      <form className={styles.authForm}>
        <Form.FormTextField
          label="Email"
          fieldProps={{
            name: "email",
            value: "",
            onChange: () => {},
          }}
        />

        <Button
          onClick={onConfirm}
          fullWidth={true}
          bgColor="app_blue.light"
          color="app_text.light"
          title="Send"
        />
      </form>
    </UI.AuthLayout>
  );
};

export default ForgotPassword;
