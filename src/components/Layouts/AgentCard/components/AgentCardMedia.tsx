import { CardMedia } from "@mui/material";

interface AgentCardMediaT {
  src: string;
  username: string;
}

const AgentCardMedia: React.FC<AgentCardMediaT> = ({ src, username }) => {
  return (
    <CardMedia
      component="figure"
      sx={{
        width: ["100%", "35%"],
        height: "200px",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid rgba(176, 176, 176, 0.3)",
      }}
    >
      <img
        src={src}
        alt={src}
        width="100%"
        height="100%"
        loading="lazy"
        title={username}
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
    </CardMedia>
  );
};

export default AgentCardMedia;
