import decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import { getJWT } from "utils/jwt";
import { paths } from "config/paths";
import { selectAuthenticatedUser } from "store/selectors/auth.selectors";

import { DecodedUserT } from "interface/config/config.types";

export default function useAuth() {
  const navigate = useNavigate();

  const user = useAppSelector(selectAuthenticatedUser);

  function checkIsAuthenticatedUser(): boolean {
    let isAuthenticatedUser = false;

    const token = getJWT();
    const decodedUser: DecodedUserT | null = token ? decode(token) : null;

    if (token && decodedUser && user && decodedUser._id === user._id)
      isAuthenticatedUser = true;

    return isAuthenticatedUser;
  }

  function redirectUnAuthorized() {
    const isAuthenticatedUser = checkIsAuthenticatedUser();
    if (!isAuthenticatedUser) navigate(paths.auth_page_signin);
  }

  function redirectAuthorized() {
    const isAuthenticatedUser = checkIsAuthenticatedUser();
    if (isAuthenticatedUser) navigate(paths.root_page);
  }

  return { redirectUnAuthorized, redirectAuthorized, checkIsAuthenticatedUser };
}
