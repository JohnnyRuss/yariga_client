/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { useParams, useNavigate } from "react-router-dom";

import {
  selectGuest,
  selectUserStatus,
  selectAuthenticatedUser,
} from "store/selectors/user.selectors";
import { textCapitalize } from "utils";
import { DYNAMIC_PATHS } from "config/paths";
import { useRedirectUnAuthorized } from "hooks/auth";
import { useUserQuery } from "hooks/api/user";
import { usePropertiesQuery } from "hooks/api/properties";

import Helmet from "pages/Helmet";
import UserProfile from "components/UserProfile/UserProfile";
import AppLayout from "components/AppLayout/AppLayout";

const UserProfilePage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

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
    getUserProperties({ userId, limit: 3 });
  }, [userId]);

  useEffect(() => {
    return () => {
      cleanUpGuest();
      cleanUpUserProperties();
    };
  }, []);

  return loading ? (
    <></>
  ) : (
    <>
      {status.status === "SUCCESS" && (
        <Helmet
          type="profile"
          image={user.avatar}
          description="User profile details"
          title={textCapitalize(user.username)}
          path={DYNAMIC_PATHS.user_profile_page(userId!)}
        />
      )}

      <AppLayout>
        <UserProfile user={user} loading={status.loading} />
      </AppLayout>
    </>
  );
};

export default UserProfilePage;
