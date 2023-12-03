import useGoToUser from "hooks/utils/useGoToUser";

import { Avatar } from "components/Layouts";
import { Stack, Typography } from "@mui/material";

import { PropertyOwnerShortT } from "interface/db/properties.types";

interface UserT {
  owner: PropertyOwnerShortT;
  isAgent: boolean;
}

const User: React.FC<UserT> = ({ owner, isAgent }) => {
  const { onGoToUser } = useGoToUser(owner._id, isAgent);

  return (
    <Stack
      direction="row"
      gap={1}
      justifyContent="flex-start"
      flexWrap="wrap"
      width="100%"
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
    </Stack>
  );
};

export default User;
