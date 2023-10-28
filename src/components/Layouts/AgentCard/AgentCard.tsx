import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Card,
  Stack,
  Button,
  CardMedia,
  Typography,
  CardContent,
  SvgIconTypeMap,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  HomeWork,
  MoreHoriz,
} from "@mui/icons-material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import { AgentShortInfoT } from "interface/db/agent.types";

interface AgentCardT {
  agent: AgentShortInfoT;
}

const AgentCard: React.FC<AgentCardT> = ({ agent }) => {
  const onOptions = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link
      to={`/agents/${agent._id}`}
      className="app__card"
      style={{ width: "100%" }}
    >
      <Card
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          maxHeight: "230px",
          boxShadow: "none",
          position: "relative",
        }}
      >
        <Button
          onClick={onOptions}
          variant="text"
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "app_text.dark",
          }}
        >
          <MoreHoriz sx={{ fontSize: "28px" }} />
        </Button>

        <CardMedia
          component="figure"
          sx={{
            width: "35%",
            height: "200px",
            borderRadius: "10px",
            overflow: "hidden",
            border: "1px solid rgba(176, 176, 176, 0.3)",
          }}
        >
          <img
            src={agent.avatar}
            alt={agent.avatar}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </CardMedia>

        <CardContent sx={{ width: "100%" }}>
          <Stack width="100%" height="100%" justifyContent="space-between">
            <Box>
              <Typography fontSize={22} fontWeight={600}>
                {agent.username}
              </Typography>

              <CommonTypography label="Agent" />
            </Box>

            <Stack direction="row" justifyContent="space-between">
              <Stack gap={1}>
                <CommonTypography label={agent.email} Icon={Email} />

                <CommonTypography label={agent.phone} Icon={Phone} />
              </Stack>

              <Stack alignItems="flex-end" gap={1}>
                <CommonTypography
                  label={agent.location.city}
                  Icon={LocationOn}
                />

                <CommonTypography
                  label={agent.listing.length.toString()}
                  Icon={HomeWork}
                />
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AgentCard;

function CommonTypography({
  Icon,
  label,
}: {
  label: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}) {
  return (
    <Typography
      fontSize={14}
      color="app_text.main"
      sx={{ display: "flex", alignItems: "center", gap: 2 }}
    >
      {Icon && <Icon sx={{ fontSize: "18px" }} />}
      {label}
    </Typography>
  );
}
