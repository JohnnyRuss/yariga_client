import { Button } from "@mui/material";
import { GpsFixed } from "@mui/icons-material";

interface GPSButtonT {
  onBackToPin: () => void;
}

const GPSButton: React.FC<GPSButtonT> = ({ onBackToPin }) => {
  return (
    <Button
      variant="text"
      onClick={onBackToPin}
      sx={{
        position: "absolute",
        bottom: "15px",
        right: "15px",
        zIndex: 999,
        color: "app_blue.light",
      }}
    >
      <GpsFixed
        sx={{
          fontSize: "35px",
        }}
      />
    </Button>
  );
};

export default GPSButton;
