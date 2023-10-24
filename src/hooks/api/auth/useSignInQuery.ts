import { useAppDispatch } from "store/hooks";
import { authActions } from "store/reducers/auth.reducer";

import { useSignInForm } from "utils/zod/auth";

export default function useSignInQuery() {
  const dispatch = useAppDispatch();

  const form = useSignInForm();

  const onSignin = form.handleSubmit((values) =>
    dispatch(authActions.signIn(values))
  );

  return { form, onSignin };
}
