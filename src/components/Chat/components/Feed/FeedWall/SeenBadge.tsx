import { Box } from "@mui/material";
import { Avatar } from "components/Chat/components/common";

type SeenBadgeT = {
  avatar: string;
  username: string;
};

const SeenBadge: React.FC<SeenBadgeT> = ({ avatar, username }) => {
  return (
    <Box ml="auto" sx={{ transform: "translate(-18px,0px)" }}>
      <Avatar width="16px" showBadge={false} src={avatar} alt={username} />
    </Box>
  );
};

export default SeenBadge;
