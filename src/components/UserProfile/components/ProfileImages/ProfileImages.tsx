import { YarigaCover } from "assets/images";
import * as UI from "./components";
import { Box } from "@mui/material";

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
    <>
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
          className="image-placeholder"
        >
          <img
            alt="cover"
            title="cover"
            width="100%"
            height="100%"
            loading="eager"
            style={{ objectFit: "cover", borderRadius: "inherit" }}
            src={YarigaCover}
          />
        </Box>

        <Box
          sx={{
            top: ["auto", "35px"],
            bottom: ["0px", "auto"],
            right: ["auto", "0px"],
            left: ["0px", "auto"],
            width: "78px",
            height: "78px",
            position: "absolute",
            borderRadius: "100%",
            overflow: "hidden",
            transform: ["translate(50%,50%)", "translateX(50%)"],
          }}
        >
          <img
            src={avatar}
            alt={username}
            loading="eager"
            width="100%"
            height="100%"
            title={username}
            style={{ objectFit: "cover" }}
          />
        </Box>

        {isAuthenticatedUser && <UI.ChangeImageButton />}
      </Box>

      <UI.ChangeImageModal />
    </>
  );
};

export default ProfileImages;
