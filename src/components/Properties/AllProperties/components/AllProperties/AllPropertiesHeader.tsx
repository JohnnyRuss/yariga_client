import { Stack } from "@mui/material";
import { SectionTitle, AddPropertyButton } from "components/Layouts";

const AllPropertiesHeader: React.FC = () => {
  return (
    <Stack
      gap="15px"
      direction={{ sx: "column", md: "row" }}
      justifyContent={{ sx: "flex-start", md: "space-between" }}
      alignItems={{ sx: "flex-start", md: "space-between" }}
    >
      <SectionTitle title="All Properties" />

      <AddPropertyButton />
    </Stack>
  );
};

export default AllPropertiesHeader;
