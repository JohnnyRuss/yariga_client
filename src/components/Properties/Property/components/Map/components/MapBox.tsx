import { Paper } from "@mui/material";

interface MapBoxT {
  children: React.ReactNode;
}

const MapBox: React.FC<MapBoxT> = ({ children }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        minHeight: "320px",
        maxHeight: "320px",
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "app_text.contrastText",
        position: "relative",
      }}
    >
      {children}
    </Paper>
  );
};

export default MapBox;
