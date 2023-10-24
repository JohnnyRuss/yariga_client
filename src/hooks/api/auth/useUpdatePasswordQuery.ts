import { useAppDispatch } from "store/hooks";
import { authActions } from "store/reducers/auth.reducer";

import useUpdatePasswordForm from "utils/zod/auth/updatePasswordValidation";

export default function useUpdatePasswordQuery() {
  const dispatch = useAppDispatch();

  const form = useUpdatePasswordForm();

  const onUpdatePassword = form.handleSubmit((values) =>
    dispatch(authActions.updatePassword(values))
  );

  return { form, onUpdatePassword };
}
