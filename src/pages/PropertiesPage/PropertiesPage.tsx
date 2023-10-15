import React from "react";

import { RouterHistory } from "config/config";
import { AllProperties } from "components/Properties";

RouterHistory.redirectUnAuthorized();

const PropertiesPage: React.FC = () => {
  return <AllProperties />;
};

export default PropertiesPage;
