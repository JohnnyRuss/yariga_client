import React, { useState } from "react";
import { useAppSelector } from "store/hooks";

import { selectAgentCredentials } from "store/selectors/agent.selectors";

import AgentCoverImage from "./AgentCoverImage";
import AgentCredentialsItem from "./AgentCredentialsItem";
import AgentCredentialsSkeleton from "./AgentCredentialsSkeleton";
import { Button, HireAgentModal } from "components/Layouts";

import { PersonAdd } from "@mui/icons-material";
import { Box, Stack, Avatar, Typography } from "@mui/material";

interface AgentCredentialsT {
  loading: boolean;
}

const AgentCredentials: React.FC<AgentCredentialsT> = ({ loading }) => {
  const agent = useAppSelector(selectAgentCredentials);

  const calcAge = (date: string): number => {
    const dateToFormat = new Date(date);

    return Math.abs(
      new Date(Date.now() - dateToFormat.getTime()).getFullYear() - 1970
    );
  };

  const age = calcAge(agent.birthDate);

  const [openHireAgent, setOpenHireAgent] = useState(false);

  const onCloseHireAgent = () => setOpenHireAgent(false);

  return (
    <>
      {loading ? (
        <AgentCredentialsSkeleton />
      ) : (
        <Box
          boxShadow={3}
          sx={{
            overflow: "hidden",
            borderRadius: "10px",
            backgroundColor: "app_bg.main",
          }}
        >
          <AgentCoverImage />

          <Stack
            sx={{
              padding: "0 20px",
              marginBottom: "-20px",
              transform: "translateY(-40px)",
            }}
            gap="30px"
          >
            <Stack direction="row" gap={2}>
              <Avatar
                sx={{ width: "100px", height: "100px" }}
                src={agent.avatar}
              />

              <Box mt="50px">
                <Typography fontWeight={600}>{agent.username}</Typography>

                <Typography fontSize={14} color="app_text.main">
                  Agent
                </Typography>
              </Box>
            </Stack>

            <Stack width="100%" gap="15px">
              <AgentCredentialsItem label="Age" value={age.toString()} />

              <AgentCredentialsItem label="City" value={agent.location.city} />

              {agent.location.state && (
                <AgentCredentialsItem
                  label="State"
                  value={agent.location.state}
                />
              )}

              <AgentCredentialsItem
                label="Country"
                value={agent.location.country}
              />

              <AgentCredentialsItem
                label="Post Code"
                value={agent.location.postcode}
              />

              <AgentCredentialsItem label="AgentID" value={agent.agentId} />

              <AgentCredentialsItem label="Phone" value={agent.phone} />

              <AgentCredentialsItem label="Email" value={agent.email} />
            </Stack>

            <Button
              fullWidth={true}
              icon={<PersonAdd />}
              title="Hire The Agent"
              onClick={() => setOpenHireAgent(true)}
            />
          </Stack>
        </Box>
      )}

      <HireAgentModal
        by="PROPERTY"
        open={openHireAgent}
        onClose={onCloseHireAgent}
      />
    </>
  );
};

export default AgentCredentials;
