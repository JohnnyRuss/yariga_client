import { CircularProgress, Box } from "@mui/material";

interface SpinnerT {
  absolute?: boolean;
}

const Spinner: React.FC<SpinnerT> = ({ absolute = true }) => {
  return (
    <Box
      zIndex={9}
      display="flex"
      sx={{ inset: 0 }}
      alignItems="center"
      justifyContent="center"
      position={absolute ? "absolute" : "unset"}
    >
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
