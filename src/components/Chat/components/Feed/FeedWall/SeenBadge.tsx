import * as MuiStyled from "./Feed.styled";
import { Avatar } from "components/Chat/components/common";

type SeenBadgeT = {
  avatar: string;
  username: string;
};

const SeenBadge: React.FC<SeenBadgeT> = ({ avatar, username }) => {
  return (
    <MuiStyled.SeenBadge>
      <Avatar width="16px" showBadge={false} src={avatar} alt={username} />
    </MuiStyled.SeenBadge>
  );
};

export default SeenBadge;
