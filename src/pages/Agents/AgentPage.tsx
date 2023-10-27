import React from "react";

import { Agent } from "components/Agent";

import { RouterHistory } from "config/config";

RouterHistory.redirectUnAuthorized();

const AgentPage: React.FC = () => {
  return <Agent />;
};

export default AgentPage;
