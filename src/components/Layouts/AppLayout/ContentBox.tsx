import React from "react";
import { Box } from "@mui/material";

interface ContentBoxT {
  children: React.ReactNode;
  flex?: boolean;
  contentReady?: boolean;
}

const ContentBox: React.FC<ContentBoxT> = ({
  children,
  flex,
  contentReady = false,
}) => {
  return (
    <Box
      flex={1}
      display={flex ? "flex" : "block"}
      height="100%"
      width="100%"
      boxSizing="border-box"
      className={contentReady ? "content__box" : ""}
      sx={{ boxSizing: "border-box" }}
    >
      {children}
    </Box>
  );
};

export default ContentBox;
