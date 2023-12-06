import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";

type RemoveImageButtonT = {
  fileId: string;
  onRemoveImage: (src: string) => void;
};

const RemoveImageButton: React.FC<RemoveImageButtonT> = ({
  fileId,
  onRemoveImage,
}) => {
  return (
    <Button
      variant="text"
      onClick={() => onRemoveImage(fileId)}
      sx={{
        top: "4px",
        right: "4px",
        width: "18px",
        height: "18px",
        minWidth: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        position: "absolute",
        color: "app_text.dark",
        backgroundColor: "app_text.light",

        "&:hover": {
          color: "app_text.dark",
          backgroundColor: "app_text.light",
        },
      }}
    >
      <Close sx={{ fontSize: "14px" }} />
    </Button>
  );
};

export default RemoveImageButton;
