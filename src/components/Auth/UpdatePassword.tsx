import React from "react";
import { useNavigate } from "react-router-dom";

import * as UI from "./components";
import * as Form from "components/Layouts/Form";
import { Button } from "components/Layouts";
import styles from "./components/auth.module.css";

const UpdatePassword: React.FC = () => {
  const navigate = useNavigate();

  const onConfirm = () => navigate("/auth/signin");

  return (
    <UI.AuthLayout
      mainText="Update Password"
      secondaryText="Enter your new password"
    >
      <form className={styles.authForm}>
        <Form.FormTextField
          label="New Password"
          fieldProps={{
            name: "email",
            value: "",
            onChange: () => {},
          }}
        />

        <Form.FormTextField
          label="Confirm Password"
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
          title="Confirm"
        />
      </form>
    </UI.AuthLayout>
  );
};

export default UpdatePassword;
