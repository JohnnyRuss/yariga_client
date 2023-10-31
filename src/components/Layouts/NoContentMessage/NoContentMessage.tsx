import React from "react";

import { Stack, Typography } from "@mui/material";

interface NoContentMessageT {
  message: string;
}

const NoContentMessage: React.FC<NoContentMessageT> = ({ message }) => {
  return (
    <Stack
      direction="row"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Typography fontWeight={600} fontSize={20} color="app_text.main">
        {message}
      </Typography>
    </Stack>
  );
};

export default NoContentMessage;
