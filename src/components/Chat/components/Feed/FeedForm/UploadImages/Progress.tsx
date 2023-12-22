import { Box } from "@mui/material";
import * as MuiStyled from "./UploadImages.styled";

type ProgressT = {
  progress: number;
};

const Progress: React.FC<ProgressT> = ({ progress }) => {
  return (
    <MuiStyled.Progress>
      <Box className="progress__line" sx={{ width: `${progress}%` }} />
    </MuiStyled.Progress>
  );
};

export default Progress;
