import React from "react";
import { Link } from "react-router-dom";

import paths from "config/paths";

import * as UI from "./components";
import * as Form from "components/Layouts/Form";
import { Button } from "components/Layouts";
import styles from "./components/auth.module.css";

const SignIn: React.FC = () => {
  return (
    <UI.AuthLayout
      mainText="Welcome Back"
      secondaryText="Welcome back! Please enter your details."
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

        <Form.FormTextField
          label="Password"
          fieldProps={{
            name: "password",
            value: "",
            onChange: () => {},
          }}
        />

        <Link
          to={paths.auth_page_forgot_password}
          className={styles.forgotPasswordLink}
        >
          Forgot Password ?
        </Link>

        <Button
          fullWidth={true}
          bgColor="app_blue.light"
          color="app_text.light"
          title="Sign In"
        />

        <UI.GoogleButton />
      </form>

      <UI.HaveAnAccountPrompt on="SIGN_IN" />
    </UI.AuthLayout>
  );
};

export default SignIn;
