import React from "react";

import UpdatePassword from "components/Auth/UpdatePassword";
import { RouterHistory } from "config/config";

RouterHistory.redirectAuthorized();

const UpdatePasswordPage: React.FC = () => {
  return <UpdatePassword />;
};

export default UpdatePasswordPage;
