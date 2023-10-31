import React from "react";
import { useAppSelector } from "store/hooks";

import useGoToUser from "hooks/utils/useGoToUser";
import { selectProperty } from "store/selectors/properties.selectors";

import ContactButton from "./ContactButton";
import AgentSkeleton from "./AgentSkeleton";
import { LocationOn, Call, Message } from "@mui/icons-material";
import { Paper, Stack, Avatar, Typography } from "@mui/material";

const Agent: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { owner, title } = useAppSelector(selectProperty);

  const { onGoToUser } = useGoToUser(owner._id);

  return loading ? (
    <AgentSkeleton />
  ) : (
    <Paper
      elevation={2}
      sx={{
        padding: "35px 25px 25px 25px",
        border: "1px solid",
        borderColor: "app_text.contrastText",
        borderRadius: "10px",
      }}
    >
      <Stack mt="10px" justifyContent="center" alignItems="center" gap="15px">
        <Avatar
          src={owner.avatar}
          alt={owner.username}
          sx={{ width: "90px", height: "90px" }}
        >
          {owner.username[0]?.toUpperCase()}
        </Avatar>

        <Stack alignItems="center">
          <Typography
            fontSize={18}
            fontWeight={600}
            onClick={onGoToUser}
            textTransform="capitalize"
            sx={{
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {owner.username}
          </Typography>

          <Typography color="app_text.main" fontSize={14}>
            {owner.email}
          </Typography>
        </Stack>

        <Typography
          color="app_text.main"
          fontSize={14}
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <LocationOn sx={{ fontSize: "18px" }} />
          North Carolina, USA
        </Typography>

        <Typography fontWeight={600}>10 Properties</Typography>

        <Stack direction="row" width="100%" gap="20px" mt="10px">
          <ContactButton
            label="Message"
            address={`mailto:${owner.email}?&Agent=Yariga&subject=Yariga:%20${title}`}
            bgColor="app_blue.light"
            color="aoo_text.light"
            icon={<Message />}
          />

          <ContactButton
            label="Call"
            address="tel:+001133"
            bgColor="app_green.main"
            color="aoo_text.light"
            icon={<Call />}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Agent;
