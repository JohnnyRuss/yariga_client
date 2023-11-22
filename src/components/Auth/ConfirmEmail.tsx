import { useAppSelector } from "store/hooks";

import { Controller } from "react-hook-form";
import { useConfirmEmailQuery } from "hooks/api/auth";
import { selectAuthStatus } from "store/selectors/auth.selectors";

import * as UI from "./components";
import { Button, Spinner } from "components/Layouts";
import { FormOTPField } from "components/Layouts/Form";
import styles from "./components/auth.module.css";

const ConfirmEmail: React.FC = () => {
  const status = useAppSelector(selectAuthStatus);

  const { form, onConfirmEmail } = useConfirmEmailQuery();

  return (
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

export default ConfirmEmail;
