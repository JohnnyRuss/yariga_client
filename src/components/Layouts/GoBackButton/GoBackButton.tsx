import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";

interface GoBackButtonT {
  children?: React.ReactNode;
}

const GoBackButton: React.FC<GoBackButtonT> = ({ children }) => {
  const navigate = useNavigate();

  const onBack = () => navigate(-1);

  return (
    <Button
      onClick={onBack}
      variant="text"
      sx={{
        fontSize: "22px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontWeight: 600,
        color: "app_text.dark",
      }}
    >
      <ArrowBackIos />

      {children}
    </Button>
  );
};

export default GoBackButton;
