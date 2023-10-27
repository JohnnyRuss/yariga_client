import { styled, Box as MuiBox } from "@mui/material";

export const AllPropertiesContainer = styled(MuiBox)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const AllPropertiesList = styled(MuiBox)<{ justify: string }>(
  ({ justify }) => ({
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: justify,
    marginBottom: "20px",
  })
);
