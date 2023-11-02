/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector, useAppDispatch } from "store/hooks";

import {
  selectAllAgents,
  selectAgentsStatus,
} from "store/selectors/agent.selectors";
import { agentActions } from "store/reducers/agent.reducer";

import { Stack, Box } from "@mui/material";
import { AgentCard, AgentCardSkeleton } from "components/Layouts";

interface HireByAgentT {
  searchStr: string;
  onHire: (args: { agentId: string }) => void;
}

const HireByAgent: React.FC<HireByAgentT> = ({ searchStr, onHire }) => {
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectAgentsStatus);
  const allAgents = useAppSelector(selectAllAgents);

  useEffect(() => {
    dispatch(agentActions.getAllAgents());

    return () => {
      dispatch(agentActions.cleanUpAgents());
    };
  }, []);

  return (
    <Stack
      gap={3}
      p="0 15px 10px 5px"
      width="70vh"
      height="70vh"
      className="custom_scrollbar"
    >
      {status.loading &&
        Array.from(new Array(4)).map(() => (
          <AgentCardSkeleton key={nanoid()} />
        ))}

      {!status.loading &&
        allAgents
          .filter((agent) =>
            searchStr !== ""
              ? new RegExp(searchStr, "i").test(agent.username) ||
                new RegExp(searchStr, "i").test(agent.email)
              : agent
          )
          .map((agent) => (
            <Box
              key={agent._id}
              position="relative"
              sx={{ height: "fit-content" }}
              onClick={() => onHire({ agentId: agent._id })}
            >
              <AgentCard agent={agent} />
              <Box
                position="absolute"
                sx={{ inset: 0, borderRadius: "10px", cursor: "pointer" }}
              />
            </Box>
          ))}
    </Stack>
  );
};

export default HireByAgent;
