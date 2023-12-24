/* eslint-disable react-hooks/exhaustive-deps */
import decode from "jwt-decode";
import { useEffect, useState } from "react";

import { getJWT } from "utils/jwt";
import { useAppSelector } from "store/hooks";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";

import { DecodedUserT } from "interface/config/config.types";

export default function useCheckIsAuthenticatedUser(
  runOnMount: boolean = false
) {
  const user = useAppSelector(selectAuthenticatedUser);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function check() {
    let isAuthenticatedUser = false;

    const token = getJWT();
    const decodedUser: DecodedUserT | null = token ? decode(token) : null;

    if (token && decodedUser && user && decodedUser._id === user._id)
      isAuthenticatedUser = true;

    return { isAuthenticatedUser };
  }

  useEffect(() => {
    if (!runOnMount) return;

    (async () => {
      const { isAuthenticatedUser } = await check();
      setIsAuthenticated(isAuthenticatedUser);
    })();
  }, [runOnMount, user]);

  return { check, user, isAuthenticated };
}
