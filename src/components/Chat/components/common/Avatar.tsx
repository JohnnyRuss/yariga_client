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
        width="100%"
        alt={alt || "Unknown User"}
        src={src || USER_DEFAULT_AVATAR}
      />
      {showBadge && (
        <Badge
          invisible={true}
          variant="dot"
          sx={{
            right: 1,
            bottom: 1,
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
