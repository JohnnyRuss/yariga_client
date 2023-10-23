import React from "react";

import { useAuthQuery } from "hooks/api";

import { Button } from "@mui/material";
import { GoogleIcon } from "assets/icons";
import { SVG } from "components/Layouts";

const GoogleButton: React.FC = () => {
  const { onLogin } = useAuthQuery();

  return (
    <Button
      variant="outlined"
      onClick={onLogin}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 0",
        textTransform: "none",
        fontWeight: 600,
        fontSize: "16px",
        color: "app_text.dark",
        borderColor: "app_text.main",
        background: "app_bg.main",
      }}
    >
      <SVG src={GoogleIcon.toString()} />

      <span>Sign in with Google</span>
    </Button>
  );
};

export default GoogleButton;
