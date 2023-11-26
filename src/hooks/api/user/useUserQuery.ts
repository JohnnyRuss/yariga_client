import { useAppDispatch } from "store/hooks";

import { userActions } from "store/reducers/user.reducer";

import {
  GetGuestArgsT,
  UpdateProfileImageArgsT,
} from "interface/db/user.types";
import { SetStatusArgsT } from "store/reducers/helpers/controlStatus";

export default function useUserQuery() {
  const dispatch = useAppDispatch();

  const getGuest = (args: GetGuestArgsT) =>
    dispatch(userActions.getGuest(args));

  const cleanUpGuest = () => dispatch(userActions.cleanUpGuest());

  const updateProfileImage = (args: UpdateProfileImageArgsT) =>
    dispatch(userActions.updateProfileImage(args));

  const setEditProfileStatus = (args: SetStatusArgsT) =>
    dispatch(userActions.setEditProfileStatus(args));

  return { getGuest, cleanUpGuest, updateProfileImage, setEditProfileStatus };
}
