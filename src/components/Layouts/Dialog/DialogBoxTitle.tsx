import React from "react";

import { DialogTitle, Typography } from "@mui/material";

import { DialogT } from "interface/components/common";

interface DialogBoxTitleT {
  title: string;
  isDanger: boolean;
  titleAlignment: DialogT["titleAlignment"];
}

const DialogBoxTitle: React.FC<DialogBoxTitleT> = ({
  title,
  isDanger,
  titleAlignment,
}) => {
  return (
    <DialogTitle id="alert-dialog-title" textAlign={titleAlignment}>
      <Typography
        component="span"
        fontWeight={600}
        color={isDanger ? "error.main" : "app_blue.light"}
      >
        {title}
      </Typography>
    </DialogTitle>
  );
};

export default DialogBoxTitle;
