import { useAppDispatch } from "store/hooks";
import { authActions } from "store/reducers/auth.reducer";

import { DeleteAccountArgsT } from "interface/db/auth.types";

export default function useDeleteAccountQuery() {
  const dispatch = useAppDispatch();

  const deleteAccount = (args: DeleteAccountArgsT) =>
    dispatch(authActions.deleteAccount(args));

  return { deleteAccount };
}
