import { Box } from "@mui/material";

type ProgressT = {
  progress: number;
};

const Progress: React.FC<ProgressT> = ({ progress }) => {
  return (
    <Box
      left={0}
      right={0}
      bottom={0}
      height="5px"
      width="100%"
      position="absolute"
      bgcolor="app_text.contrastText"
    >
      <Box
        zIndex={1}
        bgcolor="app_blue.light"
        sx={{ height: "100%", width: `${progress}%` }}
      />
    </Box>
  );
};

export default Progress;
