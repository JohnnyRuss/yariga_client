import React from "react";
// import { Link } from "react-router-dom";

import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Chip,
  Avatar,
  Divider,
} from "@mui/material";
import { Place } from "@mui/icons-material";

import { PropertyT } from "interface/db/properties.types";
interface PropertyCardT {
  property: PropertyT;
}

const PropertyCard: React.FC<PropertyCardT> = ({ property }) => {
  return (
    <Card
      elevation={2}
      sx={{
        width: "350px",
        padding: "10px",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)",
        },
      }}
    >
      <CardMedia
        component="img"
        src={property.images[0]}
        alt={property.images[0]}
        width="100%"
        height={210}
        sx={{ borderRadius: "10px" }}
      />

      <CardContent
        sx={{
          paddingX: "5px",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          justifyContent: "flex-start",
        }}
      >
        <Stack
          direction="row"
          gap={1}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Typography
            fontSize={16}
            fontWeight={600}
            color="app_text.dark"
            sx={{ "&:first-letter": { textTransform: "capitalize" } }}
          >
            {property.title}
          </Typography>

          <Box
            px={1.5}
            py={0.5}
            borderRadius={1}
            bgcolor="#dadefa"
            height="fit-content"
          >
            <Typography fontSize={12} fontWeight={600} color="app_blue.light">
              ${property.price.toLocaleString()}
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          gap={1}
          alignItems="center"
        >
          <Chip
            label={property.propertyType.label}
            variant="outlined"
            color="success"
            sx={{ flex: 1, textTransform: "capitalize" }}
            title="Property type"
          />

          <Chip
            label={property.location.addressType}
            variant="outlined"
            color="success"
            sx={{ flex: 1, textTransform: "capitalize" }}
            title="Address type"
          />
        </Stack>

        <Stack direction="row" gap={0.5} alignItems="center">
          <Place
            sx={{ fontSize: 18, color: "app_text.dark", marginTop: "-2.5px" }}
          />

          <Typography fontSize={14} color="app_text.main">
            {property.location.displayName}
          </Typography>
        </Stack>

        <Divider />

        <Stack direction="row" gap={1}>
          <Avatar
            src={property.owner.avatar}
            alt={property.owner.username}
            sx={{ width: 32, height: 32 }}
          >
            {property.owner.username[0].toUpperCase()}
          </Avatar>
          <Stack>
            <Typography textTransform="capitalize" fontWeight={600}>
              {property.owner.username}
            </Typography>
            <Typography fontSize={13} mt="-3px">
              {property.owner.email}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
