/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Helmet from "pages/Helmet";
import { useParams } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import {
  selectUserProperties,
  selectUserPropertiesStatus,
} from "store/selectors/properties.selectors";
import { textCapitalize } from "utils";
import { DYNAMIC_PATHS } from "config/paths";
import { RouterHistory } from "config/config";
import { useUserQuery } from "hooks/api/user";
import { usePropertiesQuery } from "hooks/api/properties";
import { selectGuest, selectUserStatus } from "store/selectors/user.selectors";

import UserProperties from "components/UserProfile/UserProperties";

RouterHistory.redirectUnAuthorized();

const UserPropertiesPage: React.FC = () => {
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

  return (
    <>
      {status.status === "SUCCESS" && (
        <Helmet
          image={user.avatar}
          description="User properties"
          path={DYNAMIC_PATHS.user_properties_page(user._id!)}
          title={`${textCapitalize(user.username || "")} | Properties`}
        />
      )}

      <UserProperties
        isIUser={false}
        user={user}
        status={propertiesStatus}
        properties={properties}
      />
    </>
  );
};

export default UserPropertiesPage;
