import React from "react";

import ConfirmEmail from "components/Auth/ConfirmEmail";
import { RouterHistory } from "config/config";

RouterHistory.redirectAuthorized();

const ConfirmEmailPage: React.FC = () => {
  return <ConfirmEmail />;
};

export default ConfirmEmailPage;
