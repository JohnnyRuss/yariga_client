import { Stack } from "@mui/material";
import { SectionTitle, AddPropertyButton } from "components/Layouts";

const AllPropertiesHeader: React.FC = () => {
  return (
    <Stack
      gap="15px"
      p={{ xs: 2, app_mobile: 0 }}
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "flex-start", md: "space-between" }}
      bgcolor={{ xs: "app_bg.main", app_mobile: "transparent" }}
      justifyContent={{ xs: "flex-start", md: "space-between" }}
    >
      <SectionTitle title="All Properties" />

      <AddPropertyButton />
    </Stack>
  );
};

export default AllPropertiesHeader;
