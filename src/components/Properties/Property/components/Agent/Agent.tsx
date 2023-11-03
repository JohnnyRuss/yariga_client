import React, { useState } from "react";
import { useAppSelector } from "store/hooks";

import { useHireAgentQuery } from "hooks/api";
import { useIsCurrentUser } from "hooks/utils";
import { useAppContext } from "providers/AppProvider";
import { selectProperty } from "store/selectors/properties.selectors";
import { selectHireAgentStatus } from "store/selectors/agent.selectors";

import AgentDetails from "./AgentDetails";
import AgentSkeleton from "./AgentSkeleton";
import HireAgentButtons from "./HireAgentButtons";
import AgentContactButtons from "./AgentContactButtons";
import { HireAgentModal, Spinner } from "components/Layouts";
import { Paper, Stack, Avatar } from "@mui/material";

const Agent: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { owner, agent, title, _id } = useAppSelector(selectProperty);

  const ownerData = agent
    ? { ...agent, location: agent.serviceArea, properties: agent.listing }
    : owner;

  const { isAuthenticatedUser } = useIsCurrentUser(owner._id);

  const status = useAppSelector(selectHireAgentStatus);

  // Hire Agent
  const [openHireAgent, setOpenHireAgent] = useState(false);

  const onOpenHireAgent = () => setOpenHireAgent(true);
  const onCloseHireAgent = () => setOpenHireAgent(false);

  // Fire Agent
  const { fireAgentQuery } = useHireAgentQuery();

  const { activateDialog } = useAppContext();

  const onFireAgent = () =>
    activateDialog({
      message: "Are you sure you want to",
      keyWord: `Fire ${ownerData.username}`,
      title: "Fire Agent",
      onConfirm: () =>
        fireAgentQuery({
          agentId: agent?._id || "",
          hiredBy: "PROPERTY",
          propertyId: _id,
        }),
    });

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
            position: "relative",
          }}
        >
          {status.loading && <Spinner />}

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

            {(!isAuthenticatedUser || agent) && (
              <AgentContactButtons
                title={title}
                email={ownerData.email}
                phone={ownerData.phone}
              />
            )}

            {isAuthenticatedUser && (
              <HireAgentButtons
                hasAgent={agent ? true : false}
                onFireAgent={onFireAgent}
                onOpenHireAgent={onOpenHireAgent}
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
