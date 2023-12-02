import { useState } from "react";

import { useChatContext } from "providers/chat/ChatProvider";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { IconButton, Popover } from "@mui/material";
import { TagFaces } from "@mui/icons-material";

type EmojiPickerT = {
  disabled: boolean;
};

const EmojiPicker: React.FC<EmojiPickerT> = ({ disabled }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onOpenPicker = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const onClosePicker = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { onEmojiSelection } = useChatContext();

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
