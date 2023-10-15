import React from "react";

import Auth from "components/Auth/Auth";
import { RouterHistory } from "config/config";

RouterHistory.redirectAuthorized();

const AuthPage: React.FC = () => {
  return <Auth />;
};

export default AuthPage;
