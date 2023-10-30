import React from "react";

import { Box, Stack, Typography, Button } from "@mui/material";

interface UserPropertiesT {}

const UserProperties: React.FC<UserPropertiesT> = (props) => {
  return (
    <Box className="content__box" boxShadow={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={18} fontWeight={600}>
          Your Properties
        </Typography>

        <Button
          variant="outlined"
          sx={{ color: "app_text.main", borderColor: "app_text.main" }}
        >
          View All
        </Button>
      </Stack>
    </Box>
  );
};

export default UserProperties;
