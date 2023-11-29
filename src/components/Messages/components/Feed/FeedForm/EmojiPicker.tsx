import { useState } from "react";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { IconButton, Popover } from "@mui/material";
import { TagFaces } from "@mui/icons-material";

import { EmojiT } from "interface/components/common.types";

type EmojiPickerT = {
  disabled: boolean;
  onEmojiSelection: (value: EmojiT) => void;
};

const EmojiPicker: React.FC<EmojiPickerT> = ({
  disabled,
  onEmojiSelection,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onOpenPicker = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const onClosePicker = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton onClick={onOpenPicker} disabled={disabled}>
        <TagFaces />
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClosePicker}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: 260,
        }}
      >
        <Picker
          data={data}
          onEmojiSelect={onEmojiSelection}
          theme="light"
          previewPosition="none"
        />
      </Popover>
    </>
  );
};

export default EmojiPicker;
