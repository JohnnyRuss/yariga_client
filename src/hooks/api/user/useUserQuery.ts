import { useAppDispatch } from "store/hooks";

import { userActions } from "store/reducers/user.reducer";

import { GetGuestArgsT } from "interface/db/user.types";

export default function useUserQuery() {
  const dispatch = useAppDispatch();

  const getGuest = (args: GetGuestArgsT) =>
    dispatch(userActions.getGuest(args));

  const cleanUpGuest = () => dispatch(userActions.cleanUpGuest());

  return { getGuest, cleanUpGuest };
}
