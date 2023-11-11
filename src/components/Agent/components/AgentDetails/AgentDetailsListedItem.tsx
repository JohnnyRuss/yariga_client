import React from "react";

import { Stack, Box, Typography } from "@mui/material";

interface AgentDetailsListedItemT {
  label: string;
  value: string;
}

const AgentDetailsListedItem: React.FC<AgentDetailsListedItemT> = ({
  label,
  value,
}) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "flex-start", md: "center" }}
      gap={{ xs: 1, md: 0 }}
    >
      <Box display="flex" alignItems="center">
        <Box
          bgcolor="app_blue.light"
          width="24px"
          minWidth="24px"
          height="23px"
          minHeight="23px"
          borderRadius="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ transform: "translateY(-1px)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
          >
            <path
              d="M8 1.5L3.10002 6.5L1 4.35713"
              stroke="#FCFCFC"
              strokeWidth="1.07143"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>

        <Typography
          ml={{ xs: "8px", md: "15px" }}
          width={{ xs: "125px", md: "150px" }}
          fontSize={14}
        >
          {label}
        </Typography>

        <Typography component="span" fontSize={14}>
          :
        </Typography>
      </Box>

      <Typography fontSize={14} ml="30px" color="app_text.main">
        {value}
      </Typography>
    </Stack>
  );
};

export default AgentDetailsListedItem;
