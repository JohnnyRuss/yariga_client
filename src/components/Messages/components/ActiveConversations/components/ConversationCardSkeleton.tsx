import { Box, Stack, Skeleton } from "@mui/material";

const ConversationCardSkeleton: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "8px 7px",
        borderRadius: "10px",
      }}
    >
      <Stack direction="row" gap={1} width="100%">
        <Skeleton
          variant="circular"
          width="50px"
          height="50px"
          sx={{ minWidth: "50px" }}
        />

        <Stack mt="4px" width="100%">
          <Skeleton variant="text" width="70px" />

          <Skeleton variant="text" width="90%" />
        </Stack>

        <Box ml="auto" mt="4px" className="conversation-date" minWidth="64px">
          <Skeleton variant="text" width="100%" />
        </Box>
      </Stack>
    </Box>
  );
};

export default ConversationCardSkeleton;
