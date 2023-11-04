import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useIsAuthenticatedUser from "hooks/utils/useIsAuthenticatedUser";

import { Stack, Box } from "@mui/material";
import { ContentBox, SectionTitle } from "components/Layouts";
import ProfileImages from "./components/ProfileImages";
import UserProperties from "./components/UserProperties";
import UserFormDetails from "./components/UserFormDetails";
import UserDetailsHeader from "./components/UserDetailsHeader";
import UserStaticDetails from "./components/UserStaticDetails";

import { UserT } from "interface/db/user.types";

interface UserProfileT {
  user: UserT;
  loading?: boolean;
}

const UserProfile: React.FC<UserProfileT> = ({ user, loading = false }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const userFirstName = user.username.split(" ")[0];

  const { isAuthenticatedUser } = useIsAuthenticatedUser(user._id);

  const searchParams = new URLSearchParams(window.location.search);
  const isEditProfileTab = searchParams.get("active-tab") === "profile-edit";

  const onCancelEdit = (e: React.MouseEvent) => {
    e.preventDefault();

    searchParams.delete("active-tab");
    navigate(pathname);
  };

  return (
    <ContentBox>
      <SectionTitle
        title={
          !isAuthenticatedUser ? `${userFirstName}'s Profile` : "My Profile"
        }
      />

      <Stack
        className="content__box"
        direction="row"
        gap="60px"
        width="100%"
        boxShadow={3}
      >
        <ProfileImages
          loading={loading}
          avatar={user.avatar}
          username={user.username}
          isAuthenticatedUser={isAuthenticatedUser}
        />

        <Box py="35px" width="100%">
          <UserDetailsHeader
            loading={loading}
            username={user.username}
            isAuthenticatedUser={isAuthenticatedUser}
          />

          {isEditProfileTab ? (
            <UserFormDetails
              email={user.email}
              phone={user.phone}
              location={user.location}
              onCancelEdit={onCancelEdit}
            />
          ) : (
            <UserStaticDetails
              loading={loading}
              email={user.email}
              phone={user.phone}
              location={user.location}
            />
          )}
        </Box>
      </Stack>

      <UserProperties
        userId={user._id}
        username={!isAuthenticatedUser ? `${userFirstName}'s` : "Your"}
      />
    </ContentBox>
  );
};

export default UserProfile;
