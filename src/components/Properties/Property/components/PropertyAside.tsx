import { Stack } from "@mui/material";

interface PropertyAsideT {
  children: React.ReactNode;
}

const PropertyAside: React.FC<PropertyAsideT> = ({ children }) => {
  return (
    <Stack
      width={{ xs: "100%", md: "25%" }}
      gap={3}
      justifyContent="flex-start"
      position={{ xs: "relative", md: "sticky" }}
      top={{ xs: 0, md: "70px" }}
      height={{ xs: "auto", md: "90vh" }}
      p="4px"
      sx={{
        overflowY: ["visible", "auto"],
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {children}
    </Stack>
  );
};

export default PropertyAside;
