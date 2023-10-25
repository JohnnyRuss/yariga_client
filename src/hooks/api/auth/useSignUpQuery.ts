import { useAppDispatch } from "store/hooks";
import { authActions } from "store/reducers/auth.reducer";

import useSignUpForm from "utils/zod/auth/signUpValidation";

export default function useSignUpQuery() {
  const dispatch = useAppDispatch();

  const form = useSignUpForm();

  const onSignup = form.handleSubmit((values) =>
    dispatch(authActions.signUp(values))
  );

  return { form, onSignup };
}
