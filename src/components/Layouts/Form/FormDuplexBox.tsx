import React from "react";
import { Stack } from "@mui/material";

interface FormDuplexBoxT {
  children: React.ReactNode;
}

const FormDuplexBox: React.FC<FormDuplexBoxT> = ({ children }) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={{ md: "flex-start" }}
      gap={{ xs: 2, md: 4 }}
    >
      {children}
    </Stack>
  );
};

export default FormDuplexBox;
