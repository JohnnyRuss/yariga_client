import { createSelector } from "@reduxjs/toolkit";
import { RootStateT } from "store/store";

const selectedAgentStatus = ({ agent }: RootStateT) => ({
  error: agent.agentStatus.error,
  loading: agent.agentStatus.loading,
  message: agent.agentStatus.message,
  status: agent.agentStatus.status,
});

const selectedAgentsStatus = ({ agent }: RootStateT) => ({
  error: agent.agentsStatus.error,
  loading: agent.agentsStatus.loading,
  message: agent.agentsStatus.message,
  status: agent.agentsStatus.status,
});

const selectedHireAgentStatus = ({ agent }: RootStateT) => ({
  error: agent.hireAgentsStatus.error,
  loading: agent.hireAgentsStatus.loading,
  message: agent.hireAgentsStatus.message,
  status: agent.hireAgentsStatus.status,
});

const selectedAgentCredentials = ({ agent }: RootStateT) => ({
  _id: agent.agent._id,
  birthDate: agent.agent.birthDate,
  location: agent.agent.location,
  agentId: agent.agent.agentId,
  phone: agent.agent.phone,
  email: agent.agent.email,
  avatar: agent.agent.avatar,
  username: agent.agent.username,
});

const selectedAgentDetails = ({ agent }: RootStateT) => ({
  bio: agent.agent.bio,
  agency: agent.agent.agency,
  taxNumber: agent.agent.taxNumber,
  serviceArea: agent.agent.serviceArea.displayName,
});

// Selectors

const selectAllAgents = ({ agent }: RootStateT) => agent.agents;

const selectAgentStatus = createSelector(
  selectedAgentStatus,
  (status) => status
);

const selectAgentsStatus = createSelector(
  selectedAgentsStatus,
  (status) => status
);

const selectHireAgentStatus = createSelector(
  selectedHireAgentStatus,
  (status) => status
);

const selectAgentCredentials = createSelector(
  selectedAgentCredentials,
  (credentials) => credentials
);

const selectAgentDetails = createSelector(
  selectedAgentDetails,
  (details) => details
);

export {
  selectAgentStatus,
  selectAgentsStatus,
  selectHireAgentStatus,
  selectAllAgents,
  selectAgentCredentials,
  selectAgentDetails,
};
