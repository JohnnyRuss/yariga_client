import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate, useLocation } from "react-router-dom";

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
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const searchParams = new URLSearchParams(window.location.search);

  const onEdit = (onClose: () => void) => {
    onClose();
    searchParams.set("active-tab", "profile-edit");
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return loading ? (
    <UserDetailsHeaderSkeleton />
  ) : (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={22} fontWeight={600} textTransform="capitalize">
          {username}
        </Typography>

        {isAuthenticatedUser && (
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
