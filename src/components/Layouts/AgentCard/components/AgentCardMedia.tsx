import React from "react";

import { CardMedia } from "@mui/material";

interface AgentCardMediaT {
  src: string;
}

const AgentCardMedia: React.FC<AgentCardMediaT> = ({ src }) => {
  return (
    <CardMedia
      component="figure"
      sx={{
        width: "35%",
        height: "200px",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid rgba(176, 176, 176, 0.3)",
      }}
    >
      <img
        src={src}
        alt={src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
    </CardMedia>
  );
};

export default AgentCardMedia;
