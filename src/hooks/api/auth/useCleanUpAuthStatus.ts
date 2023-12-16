/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppDispatch } from "store/hooks";

import { authActions } from "store/reducers/auth.reducer";

export default function useCleanUpAuthStatus() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(authActions.cleanUpAuthStatus());
    };
  }, []);
}
