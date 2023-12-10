import { Stack, Box, Typography } from "@mui/material";
import { RealTimeCollaboration } from "assets/icons";

const NoSelectedConversation: React.FC = () => {
  return (
    <Stack
      component="aside"
      flex={6}
      flexBasis="60%"
      alignItems="center"
      justifyContent="center"
      gap={2}
      display={{ xs: "none", app_desktop: "flex" }}
    >
      <Box component="figure" width="300px">
        <img
          width="100%"
          height="100%"
          loading="eager"
          title="conversations"
          src={RealTimeCollaboration}
          alt="real-time-collaboration"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      </Box>

      <Typography fontSize={22} fontWeight={600} color="app_text.main">
        There are no selected conversation
      </Typography>
    </Stack>
  );
};

export default NoSelectedConversation;
