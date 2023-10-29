import React from "react";

import { Button } from "@mui/material";
import { CameraAlt } from "@mui/icons-material";

interface ChangeImageButtonT {}

const ChangeImageButton: React.FC<ChangeImageButtonT> = () => {
  return (
    <Button
      variant="contained"
      sx={{
        left: "20px",
        bottom: "10px",
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
