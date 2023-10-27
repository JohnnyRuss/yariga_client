import React from "react";
import { useAppSelector } from "store/hooks";

import { selectProperty } from "store/selectors/properties.selectors";

import {
  Paper,
  Stack,
  Avatar,
  Typography,
  Button,
  Skeleton,
} from "@mui/material";
import { LocationOn, Call, Message } from "@mui/icons-material";

const Agent: React.FC<{ loading: boolean }> = ({ loading }) => {
  const { owner, title } = useAppSelector(selectProperty);

  return loading ? (
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
        <Skeleton variant="circular" width={90} height={90} />

        <Stack alignItems="center" width="100%">
          <Skeleton variant="text" width="200px" sx={{ fontSize: 18 }} />

          <Skeleton variant="text" width="150px" sx={{ fontSize: 14 }} />

          <Skeleton variant="text" width="170px" sx={{ fontSize: 14 }} />

          <Skeleton variant="text" width="120px" sx={{ fontSize: 16 }} />

          <Stack direction="row" width="100%" gap="20px" mt="10px">
            <Skeleton
              variant="rectangular"
              height="40px"
              sx={{ flex: 1, borderRadius: "5px" }}
            />

            <Skeleton
              variant="rectangular"
              height="40px"
              sx={{ flex: 1, borderRadius: "5px" }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Paper>
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
          <Typography textTransform="capitalize" fontWeight={600} fontSize={18}>
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

function ContactButton({
  address,
  bgColor,
  color,
  label,
  icon,
}: {
  address: string;
  label: string;
  bgColor: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <Button
      fullWidth
      variant="contained"
      sx={{
        padding: 0,
        color: color,
        backgroundColor: bgColor,
        borderRadius: "5px",
        overflow: "hidden",

        "&:hover": {
          color: color,
          backgroundColor: bgColor,
        },
      }}
    >
      <a
        href={address}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "8px",
          height: "100%",
          width: "100%",
          padding: "10px 15px",
        }}
      >
        {icon}

        {label}
      </a>
    </Button>
  );
}
