import { useAppDispatch } from "store/hooks";

import { agentActions } from "store/reducers/agent.reducer";

import { HireAgentArgsT } from "interface/db/agent.types";

export default function useHireAgentQuery() {
  const dispatch = useAppDispatch();

  const hireAgentQuery = ({ agentId, propertyId, hiredBy }: HireAgentArgsT) => {
    if (!agentId || !propertyId) return;

    dispatch(agentActions.hireAgent({ agentId, hiredBy, propertyId }));
  };

  return { hireAgentQuery };
}
