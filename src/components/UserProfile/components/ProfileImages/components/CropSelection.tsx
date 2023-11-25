import { Box } from "@mui/material";

type CropSelectionT = {
  width: number;
  height: number;
};

const CropSelection: React.FC<CropSelectionT> = ({ width, height }) => {
  return (
    <Box
      sx={{
        zIndex: 99,
        width: `${width}px`,
        height: `${height}px`,

        "&::after": {
          content: "''",
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "1px solid",
          borderColor: "app_text.main",
          borderRadius: "100%",
        },
      }}
    />
  );
};

export default CropSelection;
