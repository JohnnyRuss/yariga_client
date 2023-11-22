import { SVG } from "components/Layouts";
import { Typography } from "@mui/material";

interface FacilityItemT {
  label: string;
  icon: string;
}

const FacilityItem: React.FC<FacilityItemT> = ({ icon, label }) => {
  return (
    <Typography
      component="li"
      flexBasis={{ xs: "fit-content", md: "160px" }}
      textTransform="capitalize"
      fontWeight={500}
      color="app_text.main"
      sx={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
      <SVG src={icon} width="16px" height="16px" />

      <Typography>{label}</Typography>
    </Typography>
  );
};

export default FacilityItem;
