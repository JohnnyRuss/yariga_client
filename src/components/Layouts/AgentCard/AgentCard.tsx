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

interface AgentCardT {}

const AgentCard: React.FC<AgentCardT> = () => {
  const onOptions = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link to="/agents/123" className="app__card">
      <Card
        sx={{
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
          sx={{ width: "30%", borderRadius: "10px", overflow: "hidden" }}
        >
          <img
            src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1283"
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
                Karen Eilla Boyette
              </Typography>

              <CommonTypography label="Agent" />
            </Box>

            <Stack direction="row" justifyContent="space-between">
              <Stack gap={1}>
                <CommonTypography label="email@io.com" Icon={Email} />

                <CommonTypography label="+995-555-700-700" Icon={Phone} />
              </Stack>

              <Stack alignItems="flex-end" gap={1}>
                <CommonTypography label="Manchester" Icon={LocationOn} />

                <CommonTypography label="15 Properties" Icon={HomeWork} />
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
