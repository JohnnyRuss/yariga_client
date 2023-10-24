import { useAppDispatch } from "store/hooks";
import { authActions } from "store/reducers/auth.reducer";

export default function useLogoutQuery() {
  const dispatch = useAppDispatch();

  const onLogout = () => dispatch(authActions.logout());

  return { onLogout };
}
