import React from "react";

import { Box, Avatar } from "@mui/material";
import ChangeImageButton from "./ChangeImageButton";

interface ProfileImagesT {
  avatar: string;
  username: string;
  isAuthenticatedUser: boolean;
}

const ProfileImages: React.FC<ProfileImagesT> = ({
  avatar,
  username,
  isAuthenticatedUser,
}) => {
  return (
    <Box
      width="100%"
      maxWidth="440px"
      maxHeight="320px"
      position="relative"
      sx={{
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
      }}
    >
      <Box
        component="figure"
        width="100%"
        height="100%"
        sx={{ borderRadius: "inherit" }}
      >
        <img
          src="https://www.trendycovers.com/covers/abstract_3d_facebook_cover_1370594397.jpg"
          alt="cover"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          }}
        />
      </Box>

      <Avatar
        src={avatar}
        alt={username}
        sx={{
          top: "35px",
          right: "0px",
          width: "78px",
          height: "78px",
          position: "absolute",
          transform: "translateX(50%)",
        }}
      />

      {isAuthenticatedUser && <ChangeImageButton />}
    </Box>
  );
};

export default ProfileImages;
