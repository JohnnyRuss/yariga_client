import { YarigaCover } from "assets/images";
import { Box } from "@mui/material";

const AgentCoverImage: React.FC = () => {
  return (
    <Box
      component="figure"
      sx={{ width: "100%", height: "200px" }}
      className="image-placeholder"
    >
      <img
        alt="cover"
        width="100%"
        height="100%"
        loading="eager"
        title="user cover"
        style={{ objectFit: "cover" }}
        src={YarigaCover}
      />
    </Box>
  );
};

export default AgentCoverImage;
