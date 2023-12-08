import { useSearchParams } from "hooks/utils";
import useIsAuthenticatedUser from "hooks/utils/useIsAuthenticatedUser";

import * as UI from "./components";
import { Stack, Box } from "@mui/material";
import { ContentBox, SectionTitle } from "components/Layouts";

import { UserT } from "interface/db/user.types";

interface UserProfileT {
  user: UserT;
  loading?: boolean;
}

const UserProfile: React.FC<UserProfileT> = ({ user, loading = false }) => {
  const userFirstName = user.username.split(" ")[0];

  const { isAuthenticatedUser } = useIsAuthenticatedUser(user._id);

  const { getParamValue, removeParam } = useSearchParams();

  const isEditProfileTab = getParamValue("active-tab") === "profile-edit";

  const onCancelEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    removeParam("active-tab");
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
        direction={{ xs: "column", md: "row" }}
        gap="60px"
        width="100%"
        boxShadow={3}
      >
        <UI.ProfileImages
          loading={loading}
          avatar={user.avatar}
          username={user.username}
          isAuthenticatedUser={isAuthenticatedUser}
        />

        <Box py={{ xs: "15px", md: "35px" }} width="100%">
          <UI.UserDetailsHeader
            loading={loading}
            username={user.username}
            isAuthenticatedUser={isAuthenticatedUser}
          />

          {isEditProfileTab ? (
            <UI.UserFormDetails
              email={user.email}
              phone={user.phone}
              location={user.location}
              onCancelEdit={onCancelEdit}
            />
          ) : (
            <UI.UserStaticDetails
              loading={loading}
              email={user.email}
              phone={user.phone}
              location={user.location}
              userId={user._id}
              username={user.username}
              isAuthenticatedUser={isAuthenticatedUser}
            />
          )}
        </Box>
      </Stack>

      <UI.UserProperties
        userId={user._id}
        username={!isAuthenticatedUser ? `${userFirstName}'s` : "Your"}
      />
    </ContentBox>
  );
};

export default UserProfile;
