import { useImageCropContext } from "providers/ImageCropProvide";

import { Box, Stack } from "@mui/material";
import { ProfilePicMale, ProfilePicFemale } from "assets/icons";

const ImageCropPlaceholder: React.FC = () => {
  const { onFileChange } = useImageCropContext();

  return (
    <Box
      component="label"
      htmlFor="profile-image"
      sx={{
        width: "100%",
        height: "50vh",
        border: "1px dashed",
        borderColor: "app_text.main",
        borderRadius: "15px",
        textDecoration: "underline",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: 1,
        color: "app_text.main",
        cursor: "pointer",
      }}
    >
      <Stack direction="row">
        <Box
          component="figure"
          width="120px"
          sx={{
            transform: "translateX(20px)",
            boxShadow: 4,
            borderRadius: "100%",
            border: "1px solid #3f3d56",
          }}
        >
          <Box
            component="img"
            src={ProfilePicMale}
            alt="profile pic male"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          component="figure"
          width="120px"
          sx={{
            transform: "translateX(-20px)",
            backgroundColor: "app_bg.main",
            borderRadius: "100%",
            boxShadow: 4,
            border: "1px solid #3f3d56",
          }}
        >
          <Box
            component="img"
            src={ProfilePicFemale}
            alt="profile pic female"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Stack>

      <Box>
        <Box>Choose File</Box>
        <input
          type="file"
          accept="*/image"
          hidden
          id="profile-image"
          onChange={onFileChange}
        />
      </Box>
    </Box>
  );
};

export default ImageCropPlaceholder;
