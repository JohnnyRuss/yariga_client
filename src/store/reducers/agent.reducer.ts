import {
  controlStatus as status,
  setStatus,
  SetStatusArgsT,
} from "./helpers/controlStatus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  AgentT,
  HireAgentArgsT,
  HireAgentResponseT,
  GetAgentsResponseT,
  GetAgentsArgsT,
  GetAgentArgsT,
} from "interface/db/agent.types";
import { AgentStateT } from "interface/store/agent.types";

const initialState: AgentStateT = {
  agentStatus: status.default(),

  agentsStatus: status.default(),

  hireAgentsStatus: status.default(),

  agents: [],

  currentPage: 1,

  pagesCount: 1,

  agent: {
    _id: "",
    username: "",
    email: "",
    birthDate: "",
    avatar: "",
    location: {
      addressType: "",
      city: "",
      country: "",
      displayName: "",
      lat: "",
      lon: "",
      name: "",
      postcode: "",
      state: "",
    },
    bio: "",
    agentId: "",
    taxNumber: "",
    phone: "",
    agency: {
      title: "",
      agencyLicense: "",
    },
    listing: [],
    serviceArea: {
      addressType: "",
      city: "",
      country: "",
      displayName: "",
      lat: "",
      lon: "",
      name: "",
      postcode: "",
      state: "",
    },
    rent: 0,
    sold: 0,
  },
};

const agentSlice = createSlice({
  name: "yariga-agents",
  initialState,
  reducers: {
    // ALL AGENTS
    getAllAgents: {
      prepare: (payload?: GetAgentsArgsT) => {
        return { payload: payload || {} };
      },

      reducer: (state) => {
        state.agentsStatus = status.loading();
      },
    },

    setAllAgents(state, { payload }: PayloadAction<GetAgentsResponseT>) {
      state.agents = payload.agents;
      state.currentPage = payload.currentPage;
      state.pagesCount = payload.pagesCount;

      state.agentsStatus = status.default();
    },

    setAllAgentsStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.agentsStatus = setStatus({
        stage,
        message: message || "Failed to read Agents",
      });
    },

    cleanUpAgents(state) {
      state.agents = initialState.agents;
      state.currentPage = initialState.currentPage;
      state.pagesCount = initialState.pagesCount;
    },

    // AGENT DETAILS
    getAgent: {
      prepare: (payload: GetAgentArgsT) => {
        return {
          payload,
        };
      },

      reducer: (state) => {
        state.agentStatus = status.loading();
      },
    },

    setAgent(state, { payload }: PayloadAction<AgentT>) {
      state.agent = payload;
      state.agentStatus = status.success("SUCCESS");
    },

    setAgentStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.agentStatus = setStatus({
        stage,
        message: message || "Failed to read Agent details",
      });
    },

    cleanUpAgent(state) {
      state.agent = initialState.agent;
    },

    // HIRE AGENT
    hireAgent: {
      prepare: (payload: HireAgentArgsT) => {
        return { payload };
      },

      reducer: (state) => {
        state.hireAgentsStatus = status.loading();
      },
    },

    setHiredAgent(state, { payload }: PayloadAction<HireAgentResponseT>) {
      state.agent.listing = payload.listing;
    },

    // FIRE AGENT
    fireAgent: {
      prepare: (payload: HireAgentArgsT) => {
        return { payload };
      },

      reducer: (state) => {
        state.hireAgentsStatus = status.loading();
      },
    },

    setFiredAgent(state) {
      // state.agent.listing = payload.listing;
    },

    setHireAgentStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.hireAgentsStatus = setStatus({
        stage,
        message: message || "Operation is failed",
      });
    },
  },
});

export const agentActions = agentSlice.actions;
export default agentSlice.reducer;
