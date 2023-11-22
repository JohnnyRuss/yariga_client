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
        fontSize: 13,
        color: "error.main",
        textAlign: "center",
      }}
    >
      {text}
    </MuiHelperText>
  );
};

export default FormHelperText;
