import React from "react";

import * as UI from "./components";
import * as Form from "components/Layouts/Form";
import { Button } from "components/Layouts";
import styles from "./components/auth.module.css";

const SignUp: React.FC = () => {
  return (
    <UI.AuthLayout mainText="Welcome to Yariga">
      <form className={styles.authForm}>
        <Form.FormTextField
          label="Username"
          fieldProps={{
            name: "email",
            value: "",
            onChange: () => {},
          }}
        />

        <Form.FormTextField
          label="Email"
          fieldProps={{
            name: "email",
            value: "",
            onChange: () => {},
          }}
        />

        <Form.FormTextField
          label="Password"
          fieldProps={{
            name: "password",
            value: "",
            onChange: () => {},
          }}
        />

        <Form.FormTextField
          label="Confirm Password"
          fieldProps={{
            name: "password",
            value: "",
            onChange: () => {},
          }}
        />

        <Button
          fullWidth={true}
          bgColor="app_blue.light"
          color="app_text.light"
          title="Sign Up"
        />
      </form>

      <UI.HaveAnAccountPrompt on="SIGN_UP" />
    </UI.AuthLayout>
  );
};

export default SignUp;
