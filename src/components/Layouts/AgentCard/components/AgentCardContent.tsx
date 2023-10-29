import React from "react";

import {
  CardContent,
  Stack,
  Box,
  Typography,
  SvgIconTypeMap,
} from "@mui/material";
import { Email, Phone, LocationOn, HomeWork } from "@mui/icons-material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface AgentCardContentT {
  username: string;
  email: string;
  phone: string;
  city: string;
  listingAmount: number;
}

const AgentCardContent: React.FC<AgentCardContentT> = ({
  username,
  email,
  phone,
  city,
  listingAmount,
}) => {
  return (
    <CardContent sx={{ width: "100%" }}>
      <Stack width="100%" height="100%" justifyContent="space-between">
        <Box>
          <Typography fontSize={22} fontWeight={600}>
            {username}
          </Typography>

          <CommonTypography label="Agent" />
        </Box>

        <Stack direction="row" justifyContent="space-between">
          <Stack gap={1}>
            <CommonTypography label={email} Icon={Email} />

            <CommonTypography label={phone} Icon={Phone} />
          </Stack>

          <Stack alignItems="flex-end" gap={1}>
            <CommonTypography label={city} Icon={LocationOn} />

            <CommonTypography
              label={listingAmount.toString()}
              Icon={HomeWork}
            />
          </Stack>
        </Stack>
      </Stack>
    </CardContent>
  );
};

export default AgentCardContent;

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
