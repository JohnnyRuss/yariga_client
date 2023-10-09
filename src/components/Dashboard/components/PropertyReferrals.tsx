import React from "react";

import { propertyReferralsInfo } from "config/constants";

import ProgressBar from "./ProgressBar";
import { Box, Typography, Stack } from "@mui/material";

interface PropertyReferralsT {}

const PropertyReferrals: React.FC<PropertyReferralsT> = (props) => {
  return (
    <Box
      p={4}
      bgcolor="#fcfcfc"
      id="chart"
      minWidth={300}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Property Referrals
      </Typography>

      <Stack my="20px" direction="column" gap={4}>
        {propertyReferralsInfo.map((referral) => (
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
