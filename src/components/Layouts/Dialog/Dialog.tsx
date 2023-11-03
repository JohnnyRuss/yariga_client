import React from "react";

import { Dialog as MuiDialog } from "@mui/material";
import DialogBoxContent from "./DialogBoxContent";
import DialogBoxTitle from "./DialogBoxTitle";
import DialogBoxActions from "./DialogBoxActions";

import { DialogT as DialogCommonT } from "interface/components/common";

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
        <DialogBoxTitle
          title={dialog.title}
          isDanger={isDangerType}
          titleAlignment={dialog.titleAlignment}
        />
      )}

      <DialogBoxContent
        message={dialog.message}
        isDanger={isDangerType}
        keyWord={dialog.keyWord || ""}
        messageAlignment={dialog.messageAlignment}
      />

      <DialogBoxActions
        isDanger={isDangerType}
        handleClose={handleClose}
        onConfirm={dialog.onConfirm}
      />
    </MuiDialog>
  );
};

export default Dialog;
