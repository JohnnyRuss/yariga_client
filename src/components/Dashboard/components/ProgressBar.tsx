import React from "react";

import { Box, Stack, Typography } from "@mui/material";

interface ProgressBarT {
  title: string;
  percentage: number;
  color: string;
}

const ProgressBar: React.FC<ProgressBarT> = ({ color, percentage, title }) => {
  return (
    <Box width="100%">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={16} fontWeight={500} color="#11142d">
          {title}
        </Typography>

        <Typography fontSize={16} fontWeight={500} color="#11142d">
          {percentage}%
        </Typography>
      </Stack>

      <Box
        mt={2}
        position="relative"
        width="100%"
        height="8px"
        borderRadius={1}
        bgcolor="#e4e8ef"
        overflow="hidden"
      >
        <Box width={`${percentage}%`} height="100%" bgcolor={color} />
      </Box>
    </Box>
  );
};

export default ProgressBar;
