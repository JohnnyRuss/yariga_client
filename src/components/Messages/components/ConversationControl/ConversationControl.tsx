import { Stack } from "@mui/material";

type ConversationControlT = {};

const ConversationControl: React.FC<ConversationControlT> = () => {
  return (
    <Stack
      component="aside"
      flex={1}
      flexBasis="350px"
      borderLeft="1px solid"
      borderColor="app_text.contrastText"
    >
      ConversationControl
    </Stack>
  );
};

export default ConversationControl;
