import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";

type CloseButtonT = {
  onClose: () => void;
};

const CloseButton: React.FC<CloseButtonT> = ({ onClose }) => {
  return (
    <Button
      onClick={onClose}
      sx={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 99,
      }}
    >
      <Close
        sx={{
          color: "app_text.dark",
          fontSize: "32px",
        }}
      />
    </Button>
  );
};

export default CloseButton;
