import { useAppSelector } from "store/hooks";

import { Controller } from "react-hook-form";
import { useForgotPasswordQuery } from "hooks/api/auth";
import { selectAuthStatus } from "store/selectors/auth.selectors";

import * as UI from "./components";
import * as Form from "components/Layouts/Form";
import { Button, Spinner } from "components/Layouts";
import styles from "./components/auth.module.css";

const ForgotPassword: React.FC = () => {
  const status = useAppSelector(selectAuthStatus);

  const { form, onSendEmail } = useForgotPasswordQuery();

  return (
    <UI.AuthLayout
      mainText="Forgot Password"
      secondaryText="Password reset PIN will be sent to your email"
    >
      {status.loading && <Spinner />}

      <form className={styles.authForm} onSubmit={onSendEmail}>
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

        <Button
          type="submit"
          fullWidth={true}
          disabled={status.loading}
          bgColor="app_blue.light"
          color="app_text.light"
          title="Send"
        />
      </form>
    </UI.AuthLayout>
  );
};

export default ForgotPassword;
