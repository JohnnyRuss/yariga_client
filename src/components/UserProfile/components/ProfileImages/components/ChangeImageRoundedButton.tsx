import { Box } from "@mui/material";
import { Image } from "@mui/icons-material";

type ChangeImageRoundedButtonT = {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ChangeImageRoundedButton: React.FC<ChangeImageRoundedButtonT> = ({
  onFileChange,
}) => {
  return (
    <Box
      component="label"
      htmlFor="profile-image"
      sx={{
        position: "absolute",
        right: "25px",
        bottom: "70px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 24,
        color: "app_green.main",
        background: "rgba(0,0,0,0.5)",
        boxShadow: 4,
        cursor: "pointer",
      }}
    >
      <Image />
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

export default ChangeImageRoundedButton;
