/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import {
  selectUserProperties,
  selectUserPropertiesStatus,
} from "store/selectors/properties.selectors";
import { RouterHistory } from "config/config";
import { selectGuest } from "store/selectors/user.selectors";
import { useUserQuery } from "hooks/api/user";
import { usePropertiesQuery } from "hooks/api/properties";

import UserProperties from "components/UserProfile/UserProperties";

RouterHistory.redirectUnAuthorized();

const UserPropertiesPage: React.FC = () => {
  const { userId } = useParams();

  const user = useAppSelector(selectGuest);

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
    <UserProperties
      isIUser={false}
      user={user}
      status={propertiesStatus}
      properties={properties}
    />
  );
};

export default UserPropertiesPage;
