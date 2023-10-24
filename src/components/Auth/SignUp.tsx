import React from "react";
import { useAppSelector } from "store/hooks";

import { useSignUpQuery } from "hooks/api/auth";
import { selectAuthStatus } from "store/selectors/auth.selectors";

import { Controller } from "react-hook-form";

import * as UI from "./components";
import * as Form from "components/Layouts/Form";
import { Button, Spinner } from "components/Layouts";
import styles from "./components/auth.module.css";

const SignUp: React.FC = () => {
  const status = useAppSelector(selectAuthStatus);

  const { form, onSignup } = useSignUpQuery();

  return (
    <UI.AuthLayout mainText="Welcome to Yariga">
      {status.loading && <Spinner />}

      <form className={styles.authForm} onSubmit={onSignup}>
        <Controller
          control={form.control}
          name="username"
          render={({ field, fieldState }) => (
            <Form.FormTextField
              label="Username"
              fieldProps={field}
              fieldStateProps={fieldState}
            />
          )}
        />

        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Form.FormTextField
              type="email"
              label="Email"
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
              type="password"
              label="Password"
              fieldProps={field}
              fieldStateProps={fieldState}
            />
          )}
        />

        <Controller
          control={form.control}
          name="confirm_password"
          render={({ field, fieldState }) => (
            <Form.FormTextField
              type="password"
              label="Confirm Password"
              fieldProps={field}
              fieldStateProps={fieldState}
            />
          )}
        />

        <Button
          type="submit"
          fullWidth={true}
          disabled={status.loading}
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
