import { userActions } from "store/reducers/user.reducer";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { useEditProfileForm } from "utils/zod/editProfileValidation";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";

export default function useEditProfileQuery() {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectAuthenticatedUser);

  const form = useEditProfileForm();

  const onSubmit = form.handleSubmit((values) =>
    dispatch(userActions.updateUser({ userId: user._id, data: values }))
  );

  return { form, onSubmit };
}
