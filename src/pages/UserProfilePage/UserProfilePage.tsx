/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import {
  selectGuest,
  selectUserStatus,
  selectAuthenticatedUser,
} from "store/selectors/user.selectors";
import { RouterHistory } from "config/config";
import { usePropertiesQuery } from "hooks/api/properties";
import { useUserQuery } from "hooks/api/user";

import UserProfile from "components/UserProfile/UserProfile";

RouterHistory.redirectUnAuthorized();

const UserProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const { userId } = useParams();

  const status = useAppSelector(selectUserStatus);

  const user = useAppSelector(selectGuest);
  const authenticatedUser = useAppSelector(selectAuthenticatedUser);

  const { getGuest, cleanUpGuest } = useUserQuery();
  const { getUserProperties, cleanUpUserProperties } = usePropertiesQuery();

  useEffect(() => {
    if (!userId || authenticatedUser._id === userId) return navigate(-1);

    getGuest({ userId: userId });
    getUserProperties({ userId: user._id, limit: 3 });
  }, [userId]);

  useEffect(() => {
    return () => {
      cleanUpGuest();
      cleanUpUserProperties();
    };
  }, []);

  return <UserProfile user={user} loading={status.loading} />;
};

export default UserProfilePage;
