import { Snackbar as MuiSnackbar, Alert } from "@mui/material";

interface SnackbarT {
  open: boolean;
  message: string;
  severity: "success" | "error";
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarT> = ({
  open,
  message,
  severity,
  onClose,
}) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;

    onClose();
  };

  return (
    <MuiSnackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
