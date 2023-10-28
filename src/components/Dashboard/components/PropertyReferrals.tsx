import React from "react";

import { PROPERTY_REFERRALS_INFO } from "config/constants";

import ProgressBar from "./ProgressBar";
import { Box, Typography, Stack } from "@mui/material";

interface PropertyReferralsT {}

const PropertyReferrals: React.FC<PropertyReferralsT> = (props) => {
  return (
    <Box
      p={4}
      bgcolor="app_text.light"
      id="chart"
      minWidth={300}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
      boxShadow={3}
    >
      <Typography fontSize={18} fontWeight={600} color="app_text.dark">
        Property Referrals
      </Typography>

      <Stack my="20px" direction="column" gap={4}>
        {PROPERTY_REFERRALS_INFO.map((referral) => (
          <ProgressBar
            key={referral.title}
            title={referral.title}
            percentage={referral.percentage}
            color={referral.color}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyReferrals;
