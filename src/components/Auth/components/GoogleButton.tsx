import React from "react";

import { useGoogleLoginQuery } from "hooks/api/auth";

import { Button } from "@mui/material";
import { GoogleIcon } from "assets/icons";
import { SVG } from "components/Layouts";

interface GoogleButtonT {
  disabled?: boolean;
}

const GoogleButton: React.FC<GoogleButtonT> = ({ disabled }) => {
  const { onLogin } = useGoogleLoginQuery();

  return (
    <Button
      variant="outlined"
      onClick={onLogin}
      disabled={disabled}
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

        "&:disabled": {
          opacity: 0.85,
        },
      }}
    >
      <SVG src={GoogleIcon.toString()} />

      <span>Sign in with Google</span>
    </Button>
  );
};

export default GoogleButton;
