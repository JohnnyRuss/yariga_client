import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";
import { StatusT } from "interface/store/common.types";

import { AgentStateT } from "interface/store/agent.types";
import {
  AgentT,
  HireAgentArgsT,
  HireAgentResponseT,
  AgentShortInfoT,
} from "interface/db/agent.types";

const initialState: AgentStateT = {
  agentStatus: status.default(),

  agentsStatus: status.default(),

  hireAgentsStatus: status.default(),

  agents: [],

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
  },
};

const agentSlice = createSlice({
  name: "yariga-agents",
  initialState,
  reducers: {
    getAllAgents(state) {
      state.agentsStatus = status.loading();
    },

    setAllAgents(state, { payload }: PayloadAction<Array<AgentShortInfoT>>) {
      state.agents = payload;
      state.agentsStatus = status.default();
    },

    cleanUpAgents(state) {
      state.agents = initialState.agents;
    },

    getAgent: {
      prepare: (payload: { agentId: string }) => {
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
      state.agentStatus = status.default();
    },

    cleanUpAgent(state) {
      state.agent = initialState.agent;
    },

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

    setHireAgentStatus(
      state,
      {
        payload: { message, status: reqStatus },
      }: PayloadAction<{ message?: string; status: StatusT }>
    ) {
      if (reqStatus === "FAIL")
        state.hireAgentsStatus = status.error(
          message || "Fail to Hire The Agent"
        );
      else state.hireAgentsStatus = status.success(reqStatus);
    },
  },
});

export const agentActions = agentSlice.actions;
export default agentSlice.reducer;
