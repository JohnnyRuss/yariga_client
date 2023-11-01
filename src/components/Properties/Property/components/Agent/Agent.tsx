import React, { useState } from "react";
import { useAppSelector } from "store/hooks";

import { useIsCurrentUser } from "hooks/utils";
import { selectProperty } from "store/selectors/properties.selectors";

import { PersonAdd } from "@mui/icons-material";
import { Paper, Stack, Avatar, Box } from "@mui/material";

import AgentDetails from "./AgentDetails";
import AgentSkeleton from "./AgentSkeleton";
import AgentContactButtons from "./AgentContactButtons";
import { Button, HireAgentModal } from "components/Layouts";

const Agent: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { owner, title } = useAppSelector(selectProperty);

  const { isAuthenticatedUser } = useIsCurrentUser(owner._id);

  const [openHireAgent, setOpenHireAgent] = useState(false);

  const onCloseHireAgent = () => setOpenHireAgent(false);

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
              src={owner.avatar}
              alt={owner.username}
              sx={{ width: "90px", height: "90px" }}
            >
              {owner.username[0]?.toUpperCase()}
            </Avatar>

            <AgentDetails owner={owner} />

            {!isAuthenticatedUser && (
              <AgentContactButtons title={title} email={owner.email} />
            )}

            {isAuthenticatedUser && (
              <Box mt="10px" width="100%">
                <Button
                  fullWidth={true}
                  icon={<PersonAdd />}
                  title="Hire The Agent"
                  onClick={() => setOpenHireAgent(true)}
                />
              </Box>
            )}
          </Stack>
        </Paper>
      )}

      <HireAgentModal
        by="AGENT"
        open={openHireAgent}
        onClose={onCloseHireAgent}
      />
    </>
  );
};

export default Agent;
