import React from "react";

import { Button } from "@mui/material";
import { CameraAlt } from "@mui/icons-material";

interface ChangeImageButtonT {}

const ChangeImageButton: React.FC<ChangeImageButtonT> = () => {
  return (
    <Button
      variant="contained"
      sx={{
        left: ["auto", "20px"],
        right: ["20px", "auto"],
        bottom: ["auto", "10px"],
        top: ["10px", "auto"],
        position: "absolute",
        color: "app_text.main",
        backgroundColor: "app_bg.main",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <CameraAlt />
      Change Image
    </Button>
  );
};

export default ChangeImageButton;
