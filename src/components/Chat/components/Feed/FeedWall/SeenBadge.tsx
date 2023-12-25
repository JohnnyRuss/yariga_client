import * as MuiStyled from "./Feed.styled";
import { Avatar } from "components/Layouts";

type SeenBadgeT = {
  avatar: string;
  username: string;
};

const SeenBadge: React.FC<SeenBadgeT> = ({ avatar, username }) => {
  return (
    <MuiStyled.SeenBadge>
      <Avatar width="16px" src={avatar} alt={username} showBadge={false} />
    </MuiStyled.SeenBadge>
  );
};

export default SeenBadge;
