import React from "react";
import { useAppSelector } from "store/hooks";

import { RouterHistory } from "config/config";
import { selectAuthenticatedUser } from "store/selectors/auth.selectors";

import UserProfile from "components/UserProfile/UserProfile";

RouterHistory.redirectUnAuthorized();

const IProfile: React.FC = () => {
  const user = useAppSelector(selectAuthenticatedUser);

  return <UserProfile user={user} />;
};

export default IProfile;
