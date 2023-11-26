import { useImageCropContext } from "providers/ImageCropProvide";

import { Button } from "@mui/material";
import { CameraAlt } from "@mui/icons-material";

const ChangeImageButton: React.FC = () => {
  const { setOpenChangeProfileModal } = useImageCropContext();

  return (
    <Button
      onClick={() => setOpenChangeProfileModal(true)}
      variant="contained"
      sx={{
        left: ["auto", "20px"],
        right: ["20px", "auto"],
        bottom: ["auto", "10px"],
        top: ["10px", "auto"],
        position: "absolute",
        color: "app_text.main",
        backgroundColor: "app_bg.main",
        display: "flex",
        alignItems: "center",
        gap: "10px",

        "&:hover": {
          color: "app_text.light",
          backgroundColor: "app_blue.light",
        },
      }}
    >
      <CameraAlt />
      Change Image
    </Button>
  );
};

export default ChangeImageButton;
