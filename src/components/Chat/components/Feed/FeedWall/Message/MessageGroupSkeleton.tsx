import { nanoid } from "@reduxjs/toolkit";
import { Skeleton, Stack, Box } from "@mui/material";

const MessageGroupSkeleton: React.FC = () => {
  const groupMsgCount = () => Math.floor(Math.random() * 3) + 1;
  const randomWidth = () => Math.floor(Math.random() * 99) + 1;

  const isEven = (num: number): boolean => (num === 0 ? true : num % 2 === 0);

  return (
    <Stack width="100%" gap={2}>
      {Array.from(new Array(10)).map((groupe, index) => (
        <Stack
          key={nanoid()}
          direction="row"
          maxWidth="75%"
          width="100%"
          gap="10px"
          ml={isEven(index) ? "auto" : "0"}
          mr={isEven(index) ? "0" : "auto"}
          flexDirection={isEven(index) ? "row-reverse" : "initial"}
        >
          {!isEven(index) && (
            <Box mt="auto">
              <Skeleton
                variant="circular"
                width="50px"
                height="50px"
                sx={{ minWidth: "50px" }}
              />
            </Box>
          )}

          <Stack
            gap="3px"
            width="100%"
            alignItems={isEven(index) ? "flex-end" : "flex-start"}
          >
            {Array.from(new Array(groupMsgCount())).map((message) => (
              <Skeleton
                variant="text"
                width={`${randomWidth()}%`}
                key={nanoid()}
              />
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default MessageGroupSkeleton;
