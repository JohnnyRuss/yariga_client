import React from "react";

import { DialogActions, Button } from "@mui/material";

interface DialogBoxActionsT {
  isDanger: boolean;
  handleClose: () => void;
  onConfirm: () => void;
}

const DialogBoxActions: React.FC<DialogBoxActionsT> = ({
  isDanger,
  handleClose,
  onConfirm,
}) => {
  return (
    <DialogActions>
      <Button onClick={handleClose} sx={{ color: "app_text.main" }}>
        Cancel
      </Button>

      <Button
        onClick={onConfirm}
        autoFocus
        sx={{
          color: isDanger ? "error.main" : "app_blue.light",
        }}
      >
        Yes
      </Button>
    </DialogActions>
  );
};

export default DialogBoxActions;
