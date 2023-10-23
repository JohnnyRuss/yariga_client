import { styled, Box as MuiBox } from "@mui/material";

export const AllPropertiesContainer = styled(MuiBox)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const AllPropertiesList = styled(MuiBox)<{ justify: string }>(
  ({ justify }) => ({
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    gap: 3,
    justifyContent: justify,
  })
);
