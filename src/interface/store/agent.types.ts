import { LoadingStatusT } from "./common.types";
import { AgentShortInfoT, AgentT } from "interface/db/agent.types";

type AgentStateT = {
  agentStatus: LoadingStatusT;
  agentsStatus: LoadingStatusT;
  hireAgentsStatus: LoadingStatusT;
  agents: Array<AgentShortInfoT>;
  currentPage: number;
  pagesCount: number;
  agent: AgentT;
};

export type { AgentStateT };
