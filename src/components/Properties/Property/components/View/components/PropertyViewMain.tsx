import { Box } from "@mui/material";

interface PropertyViewMainT {
  src: string;
  onClick: () => void;
}

const PropertyViewMain: React.FC<PropertyViewMainT> = ({ onClick, src }) => {
  return (
    <Box
      component="figure"
      onClick={onClick}
      width={{
        xs: "100%",
        md: "70%",
      }}
      sx={{
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <img
        src={src}
        title={src}
        alt="property"
        loading="eager"
        width="100%"
        height="100%"
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
};

export default PropertyViewMain;
