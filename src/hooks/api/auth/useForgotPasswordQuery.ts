import { useAppDispatch } from "store/hooks";
import { authActions } from "store/reducers/auth.reducer";

import useForgotPasswordForm from "utils/zod/auth/forgotPasswordValidation";

export default function useForgotPasswordQuery() {
  const dispatch = useAppDispatch();

  const form = useForgotPasswordForm();

  const onSendEmail = form.handleSubmit((values) =>
    dispatch(authActions.forgotPassword(values))
  );

  return { form, onSendEmail };
}
