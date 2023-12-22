import * as MuiStyled from "./UploadImages.styled";
import { Close } from "@mui/icons-material";
import { AlertTitle, IconButton, Typography } from "@mui/material";

type OverlappedImageUploadAlertT = {
  message: string;
  onCloseOverlappedImageSizeAlert: () => void;
};

const OverlappedImageUploadAlert: React.FC<OverlappedImageUploadAlertT> = ({
  message,
  onCloseOverlappedImageSizeAlert,
}) => {
  return (
    <MuiStyled.OverlappedImageUploadAlert severity="warning">
      <AlertTitle>Warning</AlertTitle>

      <Typography>{message}</Typography>

      <IconButton
        className="alert__close-btn"
        onClick={onCloseOverlappedImageSizeAlert}
      >
        <Close />
      </IconButton>
    </MuiStyled.OverlappedImageUploadAlert>
  );
};

export default OverlappedImageUploadAlert;
