import { Modal as MuiModal, Box } from "@mui/material";
import CloseButton from "./CloseButton";

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
        <CloseButton onClose={onClose} />

        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
