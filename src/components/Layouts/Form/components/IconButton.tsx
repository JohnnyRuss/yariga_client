import { Button } from "@mui/material";

type IconButtonT = {
  children: React.ReactNode;
  width: string | number;
  height: string | number;
  onClick: () => void;
};

const IconButton: React.FC<IconButtonT> = ({
  children,
  height,
  width,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "10px",
        top: "10px",
        zIndex: 99,
        backgroundColor: "app_text.light",
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: width,
        minHeight: height,
        boxShadow: 4,
        fontSize: "20px",

        "&:hover": {
          backgroundColor: "app_blue.light",
          color: "app_text.light",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default IconButton;
