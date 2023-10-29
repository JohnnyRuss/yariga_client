import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import { paths } from "config/paths";
import { useSignInQuery } from "hooks/api/auth";
import { selectAuthStatus } from "store/selectors/auth.selectors";

import { Controller } from "react-hook-form";

import * as UI from "./components";
import * as Form from "components/Layouts/Form";
import { Button, Spinner } from "components/Layouts";
import styles from "./components/auth.module.css";

const SignIn: React.FC = () => {
  const status = useAppSelector(selectAuthStatus);

  const { form, onSignin } = useSignInQuery();

  return (
    <UI.AuthLayout
      mainText="Welcome Back"
      secondaryText="Welcome back! Please enter your details."
    >
      {status.loading && <Spinner />}

      <form className={styles.authForm} onSubmit={onSignin}>
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Form.FormTextField
              label="Email"
              type="email"
              fieldProps={field}
              fieldStateProps={fieldState}
            />
          )}
        />

        <Controller
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <Form.FormTextField
              label="Password"
              fieldProps={field}
              fieldStateProps={fieldState}
              type="password"
            />
          )}
        />

        <Link
          to={paths.auth_page_forgot_password}
          className={styles.forgotPasswordLink}
        >
          Forgot Password ?
        </Link>

        <Button
          type="submit"
          fullWidth={true}
          disabled={status.loading}
          bgColor="app_blue.light"
          color="app_text.light"
          title="Sign In"
        />

        <UI.GoogleButton disabled={status.loading} />
      </form>

      <UI.HaveAnAccountPrompt on="SIGN_IN" />
    </UI.AuthLayout>
  );
};

export default SignIn;
