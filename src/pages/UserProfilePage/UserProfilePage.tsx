import React from "react";

import UserProfile from "components/UserProfile/UserProfile";

import { RouterHistory } from "config/config";

RouterHistory.redirectUnAuthorized();

const UserProfilePage: React.FC = () => {
  return <UserProfile />;
};

export default UserProfilePage;
