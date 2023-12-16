/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "config/paths";
import { Controller } from "react-hook-form";
import { selectAuthStatus } from "store/selectors/auth.selectors";
import { useUpdatePasswordQuery, useCleanUpAuthStatus } from "hooks/api/auth";

import * as UI from "./components";
import * as Form from "components/Layouts/Form";
import styles from "./components/auth.module.css";
import { Button, Spinner, Error } from "components/Layouts";

const UpdatePassword: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const emailIsConfirmed = state?.emailIsConfirmed;

  const status = useAppSelector(selectAuthStatus);

  const { form, onUpdatePassword } = useUpdatePasswordQuery();
  useCleanUpAuthStatus();

  useEffect(() => {
    if (!emailIsConfirmed) return navigate(PATHS.auth_page_root);
  }, [emailIsConfirmed]);

  return emailIsConfirmed ? (
    <UI.AuthLayout
      mainText="Update Password"
      secondaryText="Enter your new password"
    >
      {status.loading && <Spinner />}

      <form className={styles.authForm} onSubmit={onUpdatePassword}>
        <Controller
          control={form.control}
          name="new_password"
          render={({ field, fieldState }) => (
            <Form.FormTextField
              type="password"
              label="New Password"
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

        {status.error && <Error message={status.message} />}

        <Button
          type="submit"
          fullWidth={true}
          disabled={status.loading}
          bgColor="app_blue.light"
          color="app_text.light"
          title="Confirm"
        />
      </form>
    </UI.AuthLayout>
  ) : (
    <></>
  );
};

export default UpdatePassword;
