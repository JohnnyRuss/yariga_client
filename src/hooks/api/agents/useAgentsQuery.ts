import { useAppDispatch } from "store/hooks";

import { agentActions } from "store/reducers/agent.reducer";

import { GetAgentsArgsT, GetAgentArgsT } from "interface/db/agent.types";

export default function useAgentsQuery() {
  const dispatch = useAppDispatch();

  const getAllAgents = (args?: GetAgentsArgsT) =>
    dispatch(agentActions.getAllAgents(args));

  const cleanUpAgents = () => dispatch(agentActions.cleanUpAgents());

  const getAgent = (args: GetAgentArgsT) =>
    dispatch(agentActions.getAgent(args));

  const cleanUpAgent = () => dispatch(agentActions.cleanUpAgent());

  return {
    getAllAgents,
    cleanUpAgents,
    getAgent,
    cleanUpAgent,
  };
}
