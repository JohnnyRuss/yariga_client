import { useAppDispatch } from "store/hooks";
import { authActions } from "store/reducers/auth.reducer";
import { firebaseGoogleLogin } from "services/firebase.config";

export default function useAuthQuery() {
  const dispatch = useAppDispatch();

  async function onLogin() {
    const user = await firebaseGoogleLogin();
    dispatch(authActions.googleLogin(user));
  }

  return { onLogin };
}
