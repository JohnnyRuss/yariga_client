import React from "react";

import { Button } from "@mui/material";

interface ContactButtonT {
  address: string;
  label: string;
  bgColor: string;
  color: string;
  icon: React.ReactNode;
}

const ContactButton: React.FC<ContactButtonT> = ({
  icon,
  label,
  color,
  address,
  bgColor,
}) => {
  return (
    <Button
      fullWidth
      variant="contained"
      sx={{
        padding: 0,
        color: color,
        backgroundColor: bgColor,
        borderRadius: "5px",
        overflow: "hidden",

        "&:hover": {
          color: color,
          backgroundColor: bgColor,
        },
      }}
    >
      <a
        href={address}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "8px",
          height: "100%",
          width: "100%",
          padding: "10px 15px",
        }}
      >
        {icon}

        {label}
      </a>
    </Button>
  );
};

export default ContactButton;
