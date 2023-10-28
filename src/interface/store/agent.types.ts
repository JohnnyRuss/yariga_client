import { LoadingStatusT } from "./common.types";
import { AgentShortInfoT, AgentT } from "interface/db/agent.types";

export interface AgentStateT {
  agentStatus: LoadingStatusT;
  agents: Array<AgentShortInfoT>;
  agent: AgentT;
}
