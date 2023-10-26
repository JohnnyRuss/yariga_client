import React from "react";

import { Modal as MuiModal, Box, Button } from "@mui/material";
import { Close } from "@mui/icons-material";

interface ModalT {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "transparent",
  boxShadow: 24,
  outline: "none",
};

const Modal: React.FC<ModalT> = ({ open, onClose, children }) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button
          onClick={onClose}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          <Close
            sx={{
              color: "app_text.dark",
              fontSize: "32px",
            }}
          />
        </Button>

        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
