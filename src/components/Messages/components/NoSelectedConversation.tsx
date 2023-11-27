import { Stack, Typography } from "@mui/material";

const NoSelectedConversation: React.FC = () => {
  return (
    <Stack
      component="aside"
      flex={6}
      flexBasis="60%"
      alignItems="center"
      justifyContent="center"
    >
      <Typography fontSize={22} fontWeight={600}>
        There are no selected conversation
      </Typography>
    </Stack>
  );
};

export default NoSelectedConversation;
