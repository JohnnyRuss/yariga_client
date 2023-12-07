import { Close } from "@mui/icons-material";
import { Alert, AlertTitle, IconButton, Typography } from "@mui/material";

type OverlappedImageUploadAlertT = {
  message: string;
  onCloseOverlappedImageSizeAlert: () => void;
};

const OverlappedImageUploadAlert: React.FC<OverlappedImageUploadAlertT> = ({
  message,
  onCloseOverlappedImageSizeAlert,
}) => {
  return (
    <Alert severity="warning" sx={{ position: "relative" }}>
      <AlertTitle>Warning</AlertTitle>

      <Typography>{message}</Typography>

      <IconButton
        sx={{ position: "absolute", top: 0, right: 0 }}
        onClick={onCloseOverlappedImageSizeAlert}
      >
        <Close />
      </IconButton>
    </Alert>
  );
};

export default OverlappedImageUploadAlert;
