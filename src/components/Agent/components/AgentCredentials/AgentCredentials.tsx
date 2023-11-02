import React, { useState } from "react";
import { useAppSelector } from "store/hooks";

import { selectAgentCredentials } from "store/selectors/agent.selectors";

import AgentCoverImage from "./AgentCoverImage";
import AgentCredentialsItem from "./AgentCredentialsItem";
import AgentCredentialsSkeleton from "./AgentCredentialsSkeleton";
import AgentAvatarAndUsername from "./AgentAvatarAndUsername";
import { Button, HireAgentModal } from "components/Layouts";

import { Box, Stack } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";

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
            gap="30px"
            sx={{
              padding: "0 20px",
              marginBottom: "-20px",
              transform: "translateY(-40px)",
            }}
          >
            <AgentAvatarAndUsername
              avatar={agent.avatar}
              username={agent.username}
            />

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
        hiredBy="PROPERTY"
        agentId={agent._id}
        open={openHireAgent}
        onClose={onCloseHireAgent}
      />
    </>
  );
};

export default AgentCredentials;
