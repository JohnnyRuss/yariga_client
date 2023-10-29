import React from "react";

import { Typography } from "@mui/material";

interface SectionTitleT {
  title: string;
}

const SectionTitle: React.FC<SectionTitleT> = ({ title }) => {
  return (
    <Typography
      pl={1}
      fontSize={25}
      fontWeight={700}
      color="app_text.dark"
      textTransform="capitalize"
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;
