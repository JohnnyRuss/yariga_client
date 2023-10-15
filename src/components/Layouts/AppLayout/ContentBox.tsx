import React from "react";
import { Box } from "@mui/material";

interface ContentBoxT {
  children: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxT> = ({ children }) => {
  return (
    <Box padding="15px" paddingLeft="5px" flex={1}>
      {children}
    </Box>
  );
};

export default ContentBox;
