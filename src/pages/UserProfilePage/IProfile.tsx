/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";

import { RouterHistory } from "config/config";
import { usePropertiesQuery } from "hooks/api/properties";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";

import UserProfile from "components/UserProfile/UserProfile";

RouterHistory.redirectUnAuthorized();

const IProfile: React.FC = () => {
  const user = useAppSelector(selectAuthenticatedUser);

  const { getUserProperties, cleanUpUserProperties } = usePropertiesQuery();

  useEffect(() => {
    getUserProperties({ userId: user._id, limit: 3 });

    return () => {
      cleanUpUserProperties();
    };
  }, []);

  return <UserProfile user={user} />;
};

export default IProfile;
