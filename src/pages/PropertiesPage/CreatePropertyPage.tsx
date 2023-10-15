import React from "react";

import { RouterHistory } from "config/config";
import { CreateProperty } from "components/Properties";

RouterHistory.redirectUnAuthorized();

const CreatePropertyPage: React.FC = () => {
  return <CreateProperty />;
};

export default CreatePropertyPage;
