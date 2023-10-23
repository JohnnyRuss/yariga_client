import React from "react";

import SignIn from "components/Auth/SignIn";
import { RouterHistory } from "config/config";

RouterHistory.redirectAuthorized();

const SignInPage: React.FC = () => {
  return <SignIn />;
};

export default SignInPage;
