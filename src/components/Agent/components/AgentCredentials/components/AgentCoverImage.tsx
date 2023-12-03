import { Box } from "@mui/material";

const AgentCoverImage: React.FC = () => {
  return (
    <Box component="figure" sx={{ width: "100%", height: "200px" }}>
      <img
        alt="cover"
        width="100%"
        height="100%"
        loading="eager"
        title="user cover"
        style={{ objectFit: "cover" }}
        src="https://www.trendycovers.com/covers/abstract_3d_facebook_cover_1370594397.jpg"
      />
    </Box>
  );
};

export default AgentCoverImage;
