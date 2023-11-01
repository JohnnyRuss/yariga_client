import { LoadingStatusT } from "./common.types";
import { AgentShortInfoT, AgentT } from "interface/db/agent.types";

export interface AgentStateT {
  agentStatus: LoadingStatusT;
  agentsStatus: LoadingStatusT;
  agents: Array<AgentShortInfoT>;
  agent: AgentT;
}
