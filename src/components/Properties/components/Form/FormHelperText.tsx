import React from "react";
import { FormHelperText as MuiHelperText } from "@mui/material";

interface FormHelperTextT {
  text: string;
}

const FormHelperText: React.FC<FormHelperTextT> = ({ text }) => {
  return (
    <MuiHelperText
      sx={{
        fontWeight: 500,
        margin: "10px 0",
        fontSize: 16,
        color: "app_text.dark",
      }}
    >
      {text}
    </MuiHelperText>
  );
};

export default FormHelperText;
