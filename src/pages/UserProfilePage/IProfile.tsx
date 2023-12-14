/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";

import { PATHS } from "config/paths";
import { textCapitalize } from "utils";
import { useRedirectUnAuthorized } from "hooks/auth";
import { usePropertiesQuery } from "hooks/api/properties";
import ImageCropProvider from "providers/ImageCropProvide";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";

import Helmet from "pages/Helmet";
import UserProfile from "components/UserProfile/UserProfile";
import AppLayout from "components/AppLayout/AppLayout";

const IProfile: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

  const user = useAppSelector(selectAuthenticatedUser);

  const { getUserProperties, cleanUpUserProperties } = usePropertiesQuery();

  useEffect(() => {
    getUserProperties({ userId: user._id, limit: 3 });

    return () => {
      cleanUpUserProperties();
    };
  }, []);

  return loading ? (
    <></>
  ) : (
    <>
      <Helmet
        type="profile"
        image={user.avatar}
        path={PATHS.user_iprofile_page}
        description="User profile details"
        title={textCapitalize(user.username)}
      />

      <ImageCropProvider>
        <AppLayout>
          <UserProfile user={user} />
        </AppLayout>
      </ImageCropProvider>
    </>
  );
};

export default IProfile;
