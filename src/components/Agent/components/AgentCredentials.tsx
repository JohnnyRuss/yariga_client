import React from "react";

import { Box, Stack, Avatar, Typography } from "@mui/material";

interface AgentCredentialsT {}

const AgentCredentials: React.FC<AgentCredentialsT> = () => {
  return (
    <Box
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
          <Avatar
            sx={{ width: "100px", height: "100px" }}
            src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1283"
          />

          <Box mt="50px">
            <Typography fontWeight={600}>John Russ</Typography>

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
              26
            </Typography>
          </Stack>

          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              City:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              New York City
            </Typography>
          </Stack>

          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              State:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              New York
            </Typography>
          </Stack>

          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              Country:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              USA
            </Typography>
          </Stack>

          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              Post Code:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              1001
            </Typography>
          </Stack>

          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              AgentID:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              #18457 865 8745
            </Typography>
          </Stack>

          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              Phone:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              +021 541 236 4580
            </Typography>
          </Stack>

          <Stack direction="row">
            <Typography width="25%" color="app_text.main" fontSize={14}>
              Email:
            </Typography>

            <Typography width="75%" fontSize={14} fontWeight={600}>
              russ@io.com
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCredentials;
