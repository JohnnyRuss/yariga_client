import { useAppSelector } from "store/hooks";

import { Controller } from "react-hook-form";
import { useUpdatePasswordQuery } from "hooks/api/auth";
import { selectAuthStatus } from "store/selectors/auth.selectors";

import * as UI from "./components";
import * as Form from "components/Layouts/Form";
import { Button, Spinner } from "components/Layouts";
import styles from "./components/auth.module.css";

const UpdatePassword: React.FC = () => {
  const status = useAppSelector(selectAuthStatus);

  const { form, onUpdatePassword } = useUpdatePasswordQuery();

  return (
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
  );
};

export default UpdatePassword;
