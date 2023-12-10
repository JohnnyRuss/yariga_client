import { useState } from "react";
import { useAppSelector } from "store/hooks";

import { selectAgentCredentials } from "store/selectors/agent.selectors";

import * as UI from "./components";
import { Box, Stack, useTheme } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import { Button, HireAgentModal } from "components/Layouts";

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

  const theme = useTheme();

  return (
    <>
      {loading ? (
        <UI.AgentCredentialsSkeleton />
      ) : (
        <Box
          sx={{
            overflow: "hidden",
            backgroundColor: "app_bg.main",

            [theme.breakpoints.up("app_mobile")]: {
              borderRadius: "10px",
              boxShadow: 3,
            },
          }}
        >
          <UI.AgentCoverImage />

          <Stack
            gap="30px"
            sx={{
              padding: "0 20px",
              marginBottom: "-20px",
              transform: "translateY(-40px)",
            }}
          >
            <UI.AgentAvatarAndUsername
              avatar={agent.avatar}
              username={agent.username}
            />

            <Stack width="100%" gap="15px">
              <UI.AgentCredentialsItem label="Age" value={age.toString()} />

              <UI.AgentCredentialsItem
                label="City"
                value={agent.location.city}
              />

              {agent.location.state && (
                <UI.AgentCredentialsItem
                  label="State"
                  value={agent.location.state || ""}
                />
              )}

              <UI.AgentCredentialsItem
                label="Country"
                value={agent.location.country}
              />

              <UI.AgentCredentialsItem
                label="Post Code"
                value={agent.location.postcode}
              />

              <UI.AgentCredentialsItem label="AgentID" value={agent.agentId} />

              <UI.AgentCredentialsItem label="Phone" value={agent.phone} />

              <UI.AgentCredentialsItem label="Email" value={agent.email} />
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
