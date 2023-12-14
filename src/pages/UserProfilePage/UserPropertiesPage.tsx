/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import {
  selectUserProperties,
  selectUserPropertiesStatus,
} from "store/selectors/properties.selectors";
import { textCapitalize } from "utils";
import { DYNAMIC_PATHS } from "config/paths";
import { useRedirectUnAuthorized } from "hooks/auth";
import { useUserQuery } from "hooks/api/user";
import { usePropertiesQuery } from "hooks/api/properties";
import { selectGuest, selectUserStatus } from "store/selectors/user.selectors";

import Helmet from "pages/Helmet";
import UserProperties from "components/UserProfile/UserProperties";
import AppLayout from "components/AppLayout/AppLayout";

const UserPropertiesPage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

  const { userId } = useParams();

  const user = useAppSelector(selectGuest);

  const status = useAppSelector(selectUserStatus);
  const properties = useAppSelector(selectUserProperties);
  const propertiesStatus = useAppSelector(selectUserPropertiesStatus);

  const { getGuest, cleanUpGuest } = useUserQuery();
  const { getUserProperties, cleanUpUserProperties } = usePropertiesQuery();

  useEffect(() => {
    if (!userId) return;

    getGuest({ userId: userId });
    getUserProperties({ userId: user._id });

    return () => {
      cleanUpGuest();
      cleanUpUserProperties();
    };
  }, [userId]);

  return loading ? (
    <></>
  ) : (
    <>
      {status.status === "SUCCESS" && (
        <Helmet
          image={user.avatar}
          description="User properties"
          path={DYNAMIC_PATHS.user_properties_page(user._id!)}
          title={`${textCapitalize(user.username || "")} | Properties`}
        />
      )}

      <AppLayout>
        <UserProperties
          isIUser={false}
          user={user}
          status={propertiesStatus}
          properties={properties}
        />
      </AppLayout>
    </>
  );
};

export default UserPropertiesPage;
