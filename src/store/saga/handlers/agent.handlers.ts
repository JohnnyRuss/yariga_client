import { call, put } from "redux-saga/effects";

import { setError } from "./helpers/AppError";

import * as agentAPI from "store/saga/api/agent.api";
import { agentActions } from "store/reducers/agent.reducer";
import { propertiesActions } from "store/reducers/properties.reducer";

import {
  AgentT,
  AgentShortInfoT,
  HireAgentArgsT,
  HireAgentResponseT,
} from "interface/db/agent.types";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

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

export function* hireAgent({ payload }: PayloadAction<HireAgentArgsT>) {
  try {
    const { data }: AxiosResponse<HireAgentResponseT> = yield call(
      agentAPI.hireAgentQuery,
      payload
    );

    if (payload.hiredBy === "AGENT")
      yield put(agentActions.setHiredAgent(data));
    else if (payload.hiredBy === "PROPERTY")
      yield put(propertiesActions.setHiredAgent(data));

    yield put(agentActions.setHireAgentStatus({ status: "SUCCESS" }));
  } catch (error: any) {
    yield setError({
      location: "hireAgent",
      errorSetter: agentActions.setHireAgentStatus,
      errorSetterArgs: { status: "FAIL" },
      error,
    });
  }
}
