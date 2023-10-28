import React from "react";
import { useAppSelector } from "store/hooks";

import { selectAgentCredentials } from "store/selectors/agent.selectors";

import { Box, Stack, Avatar, Typography } from "@mui/material";
import AgentCredentialsSkeleton from "./AgentCredentialsSkeleton";

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

  return loading ? (
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
      <Box component="figure" sx={{ width: "100%", height: "200px" }}>
        <img
          src="https://www.trendycovers.com/covers/abstract_3d_facebook_cover_1370594397.jpg"
          alt="cover"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Stack
        sx={{ padding: "0 20px", transform: "translateY(-40px)" }}
        gap="30px"
      >
        <Stack direction="row" gap={2}>
          <Avatar sx={{ width: "100px", height: "100px" }} src={agent.avatar} />

          <Box mt="50px">
            <Typography fontWeight={600}>{agent.username}</Typography>

            <Typography fontSize={14} color="app_text.main">
              Agent
            </Typography>
          </Box>
        </Stack>

        <Stack width="100%" gap="15px">
          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              Age:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              {age}
            </Typography>
          </Stack>

          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              City:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              {agent.location.city}
            </Typography>
          </Stack>

          {agent.location.state && (
            <Stack direction="row">
              <Typography width="25%" color="app_text.main" fontSize={14}>
                State:
              </Typography>

              <Typography width="75%" fontSize={14} fontWeight={600}>
                {agent.location.state}
              </Typography>
            </Stack>
          )}

          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              Country:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              {agent.location.country}
            </Typography>
          </Stack>

          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              Post Code:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              {agent.location.postcode}
            </Typography>
          </Stack>

          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              AgentID:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              {agent.agentId}
            </Typography>
          </Stack>

          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              Phone:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              {agent.phone}
            </Typography>
          </Stack>

          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              Email:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              {agent.email}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCredentials;
