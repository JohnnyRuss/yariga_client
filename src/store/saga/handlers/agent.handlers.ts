import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";

import * as agentAPI from "store/saga/api/agent.api";
import { agentActions } from "store/reducers/agent.reducer";

import { PayloadAction } from "@reduxjs/toolkit";
import { AgentShortInfoT, AgentT } from "interface/db/agent.types";

export function* getAllAgents() {
  try {
    const { data }: AxiosResponse<Array<AgentShortInfoT>> = yield call(
      agentAPI.getAllAgentsQuery
    );

    yield put(agentActions.setAllAgents(data));
  } catch (error) {
    console.log(error);
  }
}

export function* getAgent({ payload }: PayloadAction<{ agentId: string }>) {
  try {
    const { data }: AxiosResponse<AgentT> = yield call(
      agentAPI.getAgentQuery,
      payload
    );

    yield put(agentActions.setAgent(data));
  } catch (error) {
    console.log(error);
  }
}
