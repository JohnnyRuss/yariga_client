import React from "react";

import { Typography } from "@mui/material";

interface SectionTitleT {
  title: string;
}

const SectionTitle: React.FC<SectionTitleT> = ({ title }) => {
  return (
    <Typography fontSize={25} fontWeight={700} color="app_text.dark" pl={1}>
      {title}
    </Typography>
  );
};

export default SectionTitle;
