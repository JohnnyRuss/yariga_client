/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "store/hooks";

import { RouterHistory } from "config/config";
import { userActions } from "store/reducers/users.reducer";
import { selectUser } from "store/selectors/user.selectors";
import { selectAuthenticatedUser } from "store/selectors/auth.selectors";

import UserProfile from "components/UserProfile/UserProfile";

RouterHistory.redirectUnAuthorized();

const UserProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { userId } = useParams();

  const user = useAppSelector(selectUser);
  const authenticatedUser = useAppSelector(selectAuthenticatedUser);

  useEffect(() => {
    if (!userId || authenticatedUser._id === userId) return navigate(-1);

    dispatch(userActions.getUser({ userId }));
  }, [userId]);

  return <UserProfile user={user} />;
};

export default UserProfilePage;
