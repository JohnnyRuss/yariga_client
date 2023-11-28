import { useState } from "react";

import {
  Box,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Send } from "@mui/icons-material";

import FeedFormTextFieldActions from "./FeedFormTextFieldActions";

import { EmojiT } from "interface/components/common.types";

type FeedFormT = {};

const FeedForm: React.FC<FeedFormT> = () => {
  const [text, setText] = useState("");

  const [cursorPosition, setCursorPosition] = useState(0);

  const getCursorPosition = (element: HTMLTextAreaElement): number =>
    element.selectionStart !== undefined ? element.selectionStart : 0;

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) =>
    setCursorPosition(getCursorPosition(event.target));

  const onEmojiSelection = (value: EmojiT): void => {
    const reg = new RegExp(`.{${cursorPosition}}`);
    setText((prev) => prev.replace(reg, (match) => match + value.native));
    setCursorPosition((prev) => prev + 2);
  };

  return (
    <Box component="form" p={1} mt="auto" position="sticky" bottom={0}>
      <Stack alignItems="center" width="100%" direction="row" gap={1}>
        <TextField
          placeholder="write message"
          multiline={true}
          minRows={1}
          maxRows={4}
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          inputProps={{
            className: "custom_scrollbar",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FeedFormTextFieldActions onEmojiSelection={onEmojiSelection} />
              </InputAdornment>
            ),
          }}
        />

        <IconButton sx={{ color: "app_blue.light", marginTop: "auto" }}>
          <Send sx={{ fontSize: 42 }} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default FeedForm;
