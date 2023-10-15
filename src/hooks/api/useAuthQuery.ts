import { useDispatch } from "react-redux";
import { authActions } from "store/reducers/auth.reducer";
import { firebaseGoogleLogin } from "services/firebase.config";

export default function useAuthQuery() {
  const dispatch = useDispatch();

  async function onLogin() {
    const user = await firebaseGoogleLogin();
    dispatch(authActions.login(user));
  }

  function onLogout() {
    dispatch(authActions.logout());
  }

  return { onLogin, onLogout };
}
