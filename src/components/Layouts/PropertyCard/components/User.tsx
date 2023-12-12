import useGoToUser from "hooks/utils/useGoToUser";

import { Avatar, UserRoleChip } from "components/Layouts";
import { Stack, Typography, Box } from "@mui/material";

import { PropertyOwnerShortT } from "interface/db/properties.types";

interface UserT {
  owner: PropertyOwnerShortT;
  isAgent: boolean;
}

const User: React.FC<UserT> = ({ owner, isAgent }) => {
  const { onGoToUser } = useGoToUser(owner._id, isAgent);

  return (
    <Stack
      gap={1}
      width="100%"
      flexWrap="wrap"
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Avatar src={owner.avatar} alt={owner.username} width="35px" />

      <Stack width="max-content">
        <Typography
          fontWeight={600}
          textTransform="capitalize"
          onClick={onGoToUser}
          sx={{ ":hover": { textDecoration: "underline" } }}
        >
          {owner.username}
        </Typography>

        <Typography fontSize={13} mt="-3px" color="app_text.main">
          {owner.email}
        </Typography>
      </Stack>

      <Box ml="auto">
        <UserRoleChip role={owner.role} />
      </Box>
    </Stack>
  );
};

export default User;
