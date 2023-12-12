import { Box, Typography } from "@mui/material";

type UserRoleChipT = {
  role: "AGENT" | "USER";
};

const UserRoleChip: React.FC<UserRoleChipT> = ({ role }) => {
  const isAgent = role === "AGENT";

  return (
    <Box
      px={1.5}
      py={0.5}
      borderRadius={1}
      bgcolor={isAgent ? "success.light" : "info.light"}
      height="fit-content"
    >
      <Typography fontSize={12} fontWeight={600} color="app_text.light">
        {role}
      </Typography>
    </Box>
  );
};

export default UserRoleChip;
