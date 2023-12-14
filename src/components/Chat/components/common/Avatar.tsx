import { USER_DEFAULT_AVATAR } from "config/config";

import { Avatar as UserAvatar } from "components/Layouts";
import { Badge, Box } from "@mui/material";

type AvatarT = {
  src?: string;
  alt?: string;
  width?: string;
  showBadge?: boolean;
};

const Avatar: React.FC<AvatarT> = ({
  src,
  alt,
  width = "50px",
  showBadge = true,
}) => {
  return (
    <Box position="relative" width={width} minWidth={width} height={width}>
      <UserAvatar
        src={src || USER_DEFAULT_AVATAR}
        width="100%"
        alt={alt || "Unknown User"}
      />
      {showBadge && (
        <Badge
          invisible={true}
          variant="dot"
          sx={{
            bottom: 1,
            right: 1,
            width: "12px",
            height: "12px",
            position: "absolute",
            borderRadius: "100%",
            backgroundColor: "app_green.main",
          }}
        />
      )}
    </Box>
  );
};

export default Avatar;
