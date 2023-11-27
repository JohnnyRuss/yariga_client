import { useState } from "react";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { IconButton, Popover } from "@mui/material";
import { TagFaces } from "@mui/icons-material";

type EmojiPickerT = {};

const EmojiPicker: React.FC<EmojiPickerT> = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton onClick={handleClick}>
        <TagFaces />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: 260,
        }}
      >
        <Picker data={data} onEmojiSelect={() => {}} theme="light" />
      </Popover>
    </>
  );
};

export default EmojiPicker;
