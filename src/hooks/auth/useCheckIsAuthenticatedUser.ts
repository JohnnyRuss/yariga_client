import decode from "jwt-decode";

import { getJWT } from "utils/jwt";
import { useAppSelector } from "store/hooks";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";

import { DecodedUserT } from "interface/config/config.types";

export default function useCheckIsAuthenticatedUser() {
  const user = useAppSelector(selectAuthenticatedUser);

  async function check() {
    let isAuthenticatedUser = false;

    const token = getJWT();
    const decodedUser: DecodedUserT | null = token ? decode(token) : null;

    if (token && decodedUser && user && decodedUser._id === user._id)
      isAuthenticatedUser = true;

    return { isAuthenticatedUser };
  }

  return { check, user };
}
