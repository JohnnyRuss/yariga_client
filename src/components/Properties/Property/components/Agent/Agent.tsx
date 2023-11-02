import React, { useState } from "react";
import { useAppSelector } from "store/hooks";

import { useIsCurrentUser } from "hooks/utils";
import { selectProperty } from "store/selectors/properties.selectors";

import AgentDetails from "./AgentDetails";
import AgentSkeleton from "./AgentSkeleton";
import HireAgentButtons from "./HireAgentButtons";
import AgentContactButtons from "./AgentContactButtons";
import { HireAgentModal } from "components/Layouts";
import { Paper, Stack, Avatar } from "@mui/material";

const Agent: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { owner, agent, title, _id } = useAppSelector(selectProperty);

  const { isAuthenticatedUser } = useIsCurrentUser(owner._id);

  const [openHireAgent, setOpenHireAgent] = useState(false);

  const onCloseHireAgent = () => setOpenHireAgent(false);

  const ownerData = agent
    ? { ...agent, location: agent.serviceArea, properties: agent.listing }
    : owner;

  return (
    <>
      {loading ? (
        <AgentSkeleton />
      ) : (
        <Paper
          elevation={2}
          sx={{
            border: "1px solid",
            borderRadius: "10px",
            padding: "35px 25px 25px 25px",
            borderColor: "app_text.contrastText",
          }}
        >
          <Stack
            mt="10px"
            gap="15px"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              src={ownerData.avatar}
              alt={ownerData.username}
              sx={{ width: "90px", height: "90px" }}
            >
              {ownerData.username[0]?.toUpperCase()}
            </Avatar>

            <AgentDetails owner={ownerData} />

            {(!isAuthenticatedUser || agent !== null) && (
              <AgentContactButtons
                title={title}
                email={ownerData.email}
                phone={ownerData.phone}
              />
            )}

            {isAuthenticatedUser && (
              <HireAgentButtons
                setOpenHireAgent={setOpenHireAgent}
                hasAgent={agent ? true : false}
              />
            )}
          </Stack>
        </Paper>
      )}

      <HireAgentModal
        hiredBy="AGENT"
        propertyId={_id}
        open={openHireAgent}
        onClose={onCloseHireAgent}
      />
    </>
  );
};

export default Agent;
