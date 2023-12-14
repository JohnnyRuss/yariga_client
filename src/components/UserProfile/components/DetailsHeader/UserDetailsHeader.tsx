import { nanoid } from "@reduxjs/toolkit";

import { useSearchParams } from "hooks/utils";
import { useAppContext } from "providers/AppProvider";

import { Edit, Delete } from "@mui/icons-material";
import { DropdownMenu } from "components/Layouts";
import { Typography, Stack, MenuItem } from "@mui/material";
import UserDetailsHeaderSkeleton from "./UserDetailsHeaderSkeleton";

type UserDetailsHeaderT = {
  username: string;
  loading: boolean;
  onAccountDelete: () => void;
  isAuthenticatedUser: boolean;
};

const UserDetailsHeader: React.FC<UserDetailsHeaderT> = ({
  loading,
  username,
  onAccountDelete,
  isAuthenticatedUser,
}) => {
  const { activateDialog } = useAppContext();
  const { getParamValue, appendParam } = useSearchParams();

  const isEditRoute = getParamValue("active-tab") === "profile-edit";

  const onEdit = (onClose: () => void) => {
    onClose();
    appendParam("active-tab", "profile-edit");
  };

  const onDeleteAccount = (onClose: () => void) => {
    onClose();
    activateDialog({
      variant: "danger",
      title: "Delete Account",
      message:
        "Are you sure you want to delete Account ? \n If you do all of your information will be lost.",
      onConfirm: onAccountDelete,
    });
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
              <MenuItem onClick={() => onDeleteAccount(onClose)} key={nanoid()}>
                Delete Account
                <Delete />
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
