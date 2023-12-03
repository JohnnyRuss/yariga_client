/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Helmet from "pages/Helmet";
import { useAppSelector } from "store/hooks";

import { PATHS } from "config/paths";
import { textCapitalize } from "utils";
import { RouterHistory } from "config/config";
import { usePropertiesQuery } from "hooks/api/properties";
import ImageCropProvider from "providers/ImageCropProvide";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";

import UserProfile from "components/UserProfile/UserProfile";

RouterHistory.redirectUnAuthorized();

const IProfile: React.FC = () => {
  const user = useAppSelector(selectAuthenticatedUser);

  const { getUserProperties, cleanUpUserProperties } = usePropertiesQuery();

  useEffect(() => {
    getUserProperties({ userId: user._id, limit: 3 });

    return () => {
      cleanUpUserProperties();
    };
  }, []);

  return (
    <>
      <Helmet
        type="profile"
        image={user.avatar}
        path={PATHS.user_iprofile_page}
        description="User profile details"
        title={textCapitalize(user.username)}
      />

      <ImageCropProvider>
        <UserProfile user={user} />
      </ImageCropProvider>
    </>
  );
};

export default IProfile;
