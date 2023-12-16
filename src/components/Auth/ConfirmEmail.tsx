/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "config/paths";
import { Controller } from "react-hook-form";
import { selectAuthStatus } from "store/selectors/auth.selectors";
import { useConfirmEmailQuery, useCleanUpAuthStatus } from "hooks/api/auth";

import * as UI from "./components";
import styles from "./components/auth.module.css";
import { FormOTPField } from "components/Layouts/Form";
import { Button, Spinner, Error } from "components/Layouts";

const ConfirmEmail: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const isProcessingPasswordUpdate = state?.isProcessingPasswordUpdate;

  const status = useAppSelector(selectAuthStatus);

  const { form, onConfirmEmail } = useConfirmEmailQuery();
  useCleanUpAuthStatus();

  useEffect(() => {
    if (!isProcessingPasswordUpdate) return navigate(PATHS.auth_page_root);
  }, [isProcessingPasswordUpdate]);

  return isProcessingPasswordUpdate ? (
    <UI.AuthLayout
      mainText="Confirm your E-mail"
      secondaryText="PIN is valid for 10 minutes"
    >
      {status.loading && <Spinner />}

      <form className={styles.authForm} onSubmit={onConfirmEmail}>
        <Controller
          control={form.control}
          name="pin"
          render={({ field: { ref, ...field }, fieldState }) => (
            <FormOTPField
              fieldProps={field}
              fieldStateProps={fieldState}
              label="enter your pin"
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

export default ConfirmEmail;
