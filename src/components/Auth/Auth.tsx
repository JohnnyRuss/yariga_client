import React from "react";

import { useAuthQuery } from "hooks/api";

import { Box, Button } from "@mui/material";
import { Google } from "@mui/icons-material";

const Auth: React.FC = () => {
  const { onLogin } = useAuthQuery();

  return (
    <div className="auth_gradient">
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Button variant="contained" onClick={onLogin}>
          <span>Sign In With Google</span>
          <Google sx={{ marginLeft: "8px" }} />
        </Button>
      </Box>
    </div>
  );
};

export default Auth;
