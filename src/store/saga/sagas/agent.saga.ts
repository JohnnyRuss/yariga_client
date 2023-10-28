import { takeLatest } from "redux-saga/effects";
import { agentActions } from "store/reducers/agent.reducer";
import * as agentHandlers from "store/saga/handlers/agent.handlers";

export default function* agentSaga() {
  yield takeLatest(agentActions.getAllAgents, agentHandlers.getAllAgents);
  yield takeLatest(agentActions.getAgent, agentHandlers.getAgent);
}
