import * as UI from "./components";
import { Dialog as MuiDialog } from "@mui/material";

import { DialogT as DialogCommonT } from "interface/components/common.types";

interface DialogT {
  dialog: DialogCommonT;
  onClose: () => void;
}

const Dialog: React.FC<DialogT> = ({ dialog, onClose }) => {
  const handleClose = () => onClose();

  const isDangerType = dialog.variant === "danger";

  return (
    <MuiDialog
      open={dialog.open || false}
      onClose={handleClose}
      PaperProps={{ sx: { minWidth: "350px" } }}
    >
      {dialog.title && (
        <UI.DialogBoxTitle
          title={dialog.title}
          isDanger={isDangerType}
          titleAlignment={dialog.titleAlignment}
        />
      )}

      <UI.DialogBoxContent
        message={dialog.message}
        isDanger={isDangerType}
        keyWord={dialog.keyWord || ""}
        messageAlignment={dialog.messageAlignment}
      />

      <UI.DialogBoxActions
        isDanger={isDangerType}
        handleClose={handleClose}
        onConfirm={dialog.onConfirm}
      />
    </MuiDialog>
  );
};

export default Dialog;
