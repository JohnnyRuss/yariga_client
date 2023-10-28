import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

import { AgentStateT } from "interface/store/agent.types";
import { AgentShortInfoT, AgentT } from "interface/db/agent.types";

const initialState: AgentStateT = {
  agentStatus: status.default(),
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
      state.agentStatus = status.loading();
    },

    setAllAgents(state, { payload }: PayloadAction<Array<AgentShortInfoT>>) {
      state.agents = payload;
      state.agentStatus = status.default();
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
  },
});

export const agentActions = agentSlice.actions;
export default agentSlice.reducer;
