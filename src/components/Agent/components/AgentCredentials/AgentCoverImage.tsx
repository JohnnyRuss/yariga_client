import React from "react";

import { Box } from "@mui/material";

const AgentCoverImage: React.FC = () => {
  return (
    <Box component="figure" sx={{ width: "100%", height: "200px" }}>
      <img
        src="https://www.trendycovers.com/covers/abstract_3d_facebook_cover_1370594397.jpg"
        alt="cover"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default AgentCoverImage;
