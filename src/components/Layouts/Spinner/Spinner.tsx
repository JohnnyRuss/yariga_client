import { CircularProgress, Box } from "@mui/material";

interface SpinnerT {}

const Spinner: React.FC<SpinnerT> = () => {
  return (
    <Box
      position="absolute"
      sx={{ inset: 0 }}
      zIndex={9}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
