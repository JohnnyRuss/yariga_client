/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "store/hooks";

import {
  selectGuest,
  selectUserStatus,
  selectAuthenticatedUser,
} from "store/selectors/user.selectors";
import { RouterHistory } from "config/config";
import { userActions } from "store/reducers/user.reducer";
import { propertiesActions } from "store/reducers/properties.reducer";

import UserProfile from "components/UserProfile/UserProfile";

RouterHistory.redirectUnAuthorized();

const UserProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { userId } = useParams();

  const user = useAppSelector(selectGuest);
  const authenticatedUser = useAppSelector(selectAuthenticatedUser);

  const status = useAppSelector(selectUserStatus);

  useEffect(() => {
    if (!userId || authenticatedUser._id === userId) return navigate(-1);

    dispatch(userActions.getUser({ userId }));
    dispatch(propertiesActions.getUserProperties({ userId, limit: 3 }));
  }, [userId]);

  useEffect(() => {
    return () => {
      dispatch(userActions.cleanUpGuest());
      dispatch(propertiesActions.cleanUpAllProperties());
    };
  }, []);

  return <UserProfile user={user} loading={status.loading} />;
};

export default UserProfilePage;
