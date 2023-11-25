import { Box } from "@mui/material";

type ImageCropPlaceholderT = {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ImageCropPlaceholder: React.FC<ImageCropPlaceholderT> = ({
  onFileChange,
}) => {
  return (
    <Box
      component="label"
      htmlFor="profile-image"
      sx={{
        width: "100%",
        height: "50vh",
        border: "1px dashed #333",
        borderRadius: "15px",
        textDecoration: "underline",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 600,
        fontSize: 26,
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
