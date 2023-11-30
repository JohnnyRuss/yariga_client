import { useChatContext } from "providers/ChatProvider";

import * as UI from "./";
import { Box, Stack, TextField, InputAdornment } from "@mui/material";

type FeedFormT = {
  disabled: boolean;
};

const FeedForm: React.FC<FeedFormT> = ({ disabled }) => {
  const { text, onSendMessage, onEnter, onTextChange, handleBlur } =
    useChatContext();

  return (
    <Box
      component="form"
      p={1}
      mt="auto"
      position="sticky"
      bottom={0}
      onSubmit={onSendMessage}
    >
      <Stack alignItems="center" width="100%" direction="row" gap={1}>
        <TextField
          placeholder="write message"
          multiline={true}
          minRows={1}
          maxRows={4}
          fullWidth
          value={text}
          disabled={disabled}
          onChange={onTextChange}
          onBlur={handleBlur}
          onKeyDown={onEnter}
          inputProps={{
            className: "custom_scrollbar",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <UI.FeedFormTextFieldActions disabled={disabled} />
              </InputAdornment>
            ),
          }}
        />

        <UI.SendMessageButton disabled={disabled} />
      </Stack>
    </Box>
  );
};

export default FeedForm;
