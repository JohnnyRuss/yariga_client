import { useAppDispatch } from "store/hooks";
import { authActions } from "store/reducers/auth.reducer";

import useConfirmEmailForm from "utils/zod/auth/confirmEmailValidation";

export default function useConfirmEmailQuery() {
  const dispatch = useAppDispatch();

  const form = useConfirmEmailForm();

  const onConfirmEmail = form.handleSubmit((values) =>
    dispatch(authActions.confirmEmail({ pin: +values.pin }))
  );

  return { form, onConfirmEmail };
}
