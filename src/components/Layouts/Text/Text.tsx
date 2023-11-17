import { nanoid } from "@reduxjs/toolkit";

import { Stack, Typography } from "@mui/material";

interface TextT {
  text: string;
}

const Text: React.FC<TextT> = ({ text }) => {
  return (
    <Stack gap={1}>
      {text.split("\n").map((paragraph) => (
        <Typography key={nanoid()}>{paragraph}</Typography>
      ))}
    </Stack>
  );
};

export default Text;
