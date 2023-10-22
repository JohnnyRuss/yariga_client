import React from "react";
import { Box } from "@mui/material";

interface ContentBoxT {
  children: React.ReactNode;
  flex?: boolean;
}

const ContentBox: React.FC<ContentBoxT> = ({ children, flex }) => {
  return (
    <Box
      flex={1}
      display={flex ? "flex" : "block"}
      height="100%"
      width="100%"
      bgcolor="app_bg.main"
      padding="20px"
      boxSizing="border-box"
      borderRadius="15px"
    >
      {children}
    </Box>
  );
};

export default ContentBox;
