/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PATHS } from "config/paths";
import useCheckIsAuthenticatedUser from "./useCheckIsAuthenticatedUser";
import logger from "utils/logger";

export default function useRedirectUnAuthorized() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const { check } = useCheckIsAuthenticatedUser();

  useEffect(() => {
    (async () => {
      try {
        const { isAuthenticatedUser } = await check();
        if (!isAuthenticatedUser) navigate(PATHS.auth_page_signin);
      } catch (error) {
        logger(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading };
}
