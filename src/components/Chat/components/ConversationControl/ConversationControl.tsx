import { Stack } from "@mui/material";

type ConversationControlT = {};

const ConversationControl: React.FC<ConversationControlT> = () => {
  return (
    <Stack
      flex={1}
      component="aside"
      flexBasis="250px"
      borderLeft="1px solid"
      borderColor="app_text.contrastText"
    >
      ConversationControl
    </Stack>
  );
};

export default ConversationControl;
