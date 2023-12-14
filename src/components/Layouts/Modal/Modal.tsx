import { Modal as MuiModal, Box } from "@mui/material";
import CloseButton from "./CloseButton";

type ModalT = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  disableClose?: boolean;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "transparent",
  boxShadow: 24,
  outline: "none",
};

const Modal: React.FC<ModalT> = ({
  open,
  onClose,
  children,
  disableClose = false,
}) => {
  const onCloseModal = () => {
    if (disableClose) return;
    onClose();
  };

  return (
    <MuiModal
      open={open}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CloseButton onClose={onCloseModal} />

        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
