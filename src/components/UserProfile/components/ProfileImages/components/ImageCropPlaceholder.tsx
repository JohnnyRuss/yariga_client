import { useImageCropContext } from "providers/ImageCropProvide";

import { Box } from "@mui/material";

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
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: 1,
        color: "app_text.main",
        cursor: "pointer",
      }}
    >
      Choose File
      <input
        type="file"
        accept="*/image"
        hidden
        id="profile-image"
        onChange={onFileChange}
      />
    </Box>
  );
};

export default ImageCropPlaceholder;
