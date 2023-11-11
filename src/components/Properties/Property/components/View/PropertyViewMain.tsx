import React from "react";

import { Box } from "@mui/material";

interface PropertyViewMainT {
  src: string;
  onClick: () => void;
}

const PropertyViewMain: React.FC<PropertyViewMainT> = ({ onClick, src }) => {
  return (
    <Box
      component="figure"
      onClick={onClick}
      sx={{
        width: ["100%", "70%"],
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <img
        src={src}
        alt="property"
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default PropertyViewMain;
