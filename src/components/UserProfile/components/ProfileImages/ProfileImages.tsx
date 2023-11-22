import * as UI from "./components";
import { Box, Avatar } from "@mui/material";

interface ProfileImagesT {
  avatar: string;
  username: string;
  isAuthenticatedUser: boolean;
  loading: boolean;
}

const ProfileImages: React.FC<ProfileImagesT> = ({
  avatar,
  username,
  isAuthenticatedUser,
  loading,
}) => {
  return loading ? (
    <UI.ProfileImagesSkeleton />
  ) : (
    <Box
      width="min(440px,100%)"
      maxWidth="440px"
      height={{ xs: "300px", md: "350px" }}
      position="relative"
      sx={{
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderTopRightRadius: ["10px", "0px"],
        borderBottomRightRadius: ["10px", "0px"],
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
          top: ["auto", "35px"],
          bottom: ["0px", "auto"],
          right: ["auto", "0px"],
          left: ["0px", "auto"],
          width: "78px",
          height: "78px",
          position: "absolute",
          transform: ["translate(50%,50%)", "translateX(50%)"],
        }}
      />

      {isAuthenticatedUser && <UI.ChangeImageButton />}
    </Box>
  );
};

export default ProfileImages;
