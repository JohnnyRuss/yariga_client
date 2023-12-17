import { useAppDispatch } from "store/hooks";
import { authActions } from "store/reducers/auth.reducer";

import useUpdatePasswordForm from "utils/zod/auth/updatePasswordValidation";

export default function useUpdatePasswordQuery() {
  const dispatch = useAppDispatch();

  const form = useUpdatePasswordForm();

  const onUpdatePassword = form.handleSubmit((values) =>
    dispatch(
      authActions.updatePassword({
        password: values.new_password,
        confirm_password: values.confirm_password,
      })
    )
  );

  return { form, onUpdatePassword };
}
