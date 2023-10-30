// import { useAppDispatch } from "store/hooks";
// import { authActions } from "store/reducers/auth.reducer";

import { useEditProfileForm } from "utils/zod/editProfileValidation";

export default function useEditProfileQuery() {
  const form = useEditProfileForm();

  const onSubmit = form.handleSubmit((values) => {
    console.log(values);
  });

  return { form, onSubmit };
}
