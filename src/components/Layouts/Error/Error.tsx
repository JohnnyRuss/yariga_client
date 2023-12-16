import { Typography } from "@mui/material";

type ErrorT = {message:string};

const Error: React.FC<ErrorT> = ({message}) => {
  return (
    <Typography color="error.main" textAlign="center" fontSize={14}>
      {message}
    </Typography>
  );
};

export default Error;
