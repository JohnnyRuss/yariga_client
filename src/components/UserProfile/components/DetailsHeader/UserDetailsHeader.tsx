import { nanoid } from "@reduxjs/toolkit";

import { useSearchParams } from "hooks/utils";

import { Edit } from "@mui/icons-material";
import { DropdownMenu } from "components/Layouts";
import { Typography, Stack, MenuItem } from "@mui/material";
import UserDetailsHeaderSkeleton from "./UserDetailsHeaderSkeleton";

interface UserDetailsHeaderT {
  username: string;
  isAuthenticatedUser: boolean;
  loading: boolean;
}

const UserDetailsHeader: React.FC<UserDetailsHeaderT> = ({
  username,
  isAuthenticatedUser,
  loading,
}) => {
  const { getParamValue, appendParam } = useSearchParams();

  const isEditRoute = getParamValue("active-tab") === "profile-edit";

  const onEdit = (onClose: () => void) => {
    onClose();
    appendParam("active-tab", "profile-edit");
  };

  return loading ? (
    <UserDetailsHeaderSkeleton />
  ) : (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={22} fontWeight={600} textTransform="capitalize">
          {username}
        </Typography>

        {isAuthenticatedUser && !isEditRoute && (
          <DropdownMenu
            render={({ onClose }) => [
              <MenuItem onClick={() => onEdit(onClose)} key={nanoid()}>
                Edit
                <Edit />
              </MenuItem>,
            ]}
          />
        )}
      </Stack>

      <Typography color="app_text.main" lineHeight="24px">
        User
      </Typography>
    </>
  );
};

export default UserDetailsHeader;
