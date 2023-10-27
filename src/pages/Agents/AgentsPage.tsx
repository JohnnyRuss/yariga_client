import React from "react";

import { Agents } from "components/Agent";

import { RouterHistory } from "config/config";

RouterHistory.redirectUnAuthorized();

const AgentsPage: React.FC = () => {
  return <Agents />;
};

export default AgentsPage;
