import { Avatar as MuiAvatar, Badge, Box } from "@mui/material";

type AvatarT = {
  src: string;
  alt: string;
};

const Avatar: React.FC<AvatarT> = ({ src, alt }) => {
  return (
    <Box position="relative" width="50px" minWidth="50px" height="50px">
      <MuiAvatar src={src} sx={{ width: "100%", height: "100%" }} alt={alt} />
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
    </Box>
  );
};

export default Avatar;
