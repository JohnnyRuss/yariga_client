import { Box, Stack, TextField, InputAdornment } from "@mui/material";

import FeedFormTextFieldActions from "./FeedFormTextFieldActions";

type FeedFormT = {};

const FeedForm: React.FC<FeedFormT> = () => {
  return (
    <Box component="form" p={1} mt="auto" position="sticky" bottom={0}>
      <Stack alignItems="center" width="100%">
        <TextField
          placeholder="write message"
          multiline={true}
          minRows={1}
          maxRows={4}
          fullWidth
          inputProps={{
            className: "custom_scrollbar",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FeedFormTextFieldActions />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Box>
  );
};

export default FeedForm;
