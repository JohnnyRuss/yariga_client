import React from "react";
import { Link } from "react-router-dom";

import paths from "config/paths";

import { Typography } from "@mui/material";

interface HaveAnAccountPromptT {
  on: "SIGN_IN" | "SIGN_UP";
}

const HaveAnAccountPrompt: React.FC<HaveAnAccountPromptT> = ({ on }) => {
  const isSignIn = on === "SIGN_IN";

  return (
    <Typography
      textAlign="center"
      width="100%"
      fontSize={14}
      color="app_text.main"
    >
      {isSignIn ? " Don't have an account" : "Have an account"} ?&nbsp;
      <Typography
        component={Link}
        to={isSignIn ? paths.auth_page_signup : paths.auth_page_signin}
        fontSize={14}
        color="app_blue.light"
        className="underline"
      >
        {isSignIn ? "Sign up" : "Sign in"}
      </Typography>
    </Typography>
  );
};

export default HaveAnAccountPrompt;
