import React from "react";

import { DialogContent, DialogContentText, Typography } from "@mui/material";

import { DialogT } from "interface/components/common.types";
interface DialogBoxContentT {
  message: string;
  keyWord: string;
  isDanger: boolean;
  messageAlignment: DialogT["messageAlignment"];
}

const DialogBoxContent: React.FC<DialogBoxContentT> = ({
  message,
  keyWord,
  isDanger,
  messageAlignment,
}) => {
  return (
    <DialogContent>
      <DialogContentText
        id="alert-dialog-description"
        textAlign={messageAlignment}
      >
        <Typography component="span">
          {message}
          &nbsp;
          {keyWord && (
            <Typography
              component="span"
              fontWeight={500}
              color={isDanger ? "error.main" : "app_blue.light"}
            >
              {keyWord}
            </Typography>
          )}
          &nbsp;?
        </Typography>
      </DialogContentText>
    </DialogContent>
  );
};

export default DialogBoxContent;
