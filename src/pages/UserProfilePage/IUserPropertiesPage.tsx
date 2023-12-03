/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Helmet from "pages/Helmet";
import { useAppSelector } from "store/hooks";

import {
  selectUserProperties,
  selectUserPropertiesStatus,
} from "store/selectors/properties.selectors";
import { DYNAMIC_PATHS } from "config/paths";
import { textCapitalize } from "utils";
import { RouterHistory } from "config/config";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";
import { usePropertiesQuery } from "hooks/api/properties";

import UserProperties from "components/UserProfile/UserProperties";

RouterHistory.redirectUnAuthorized();

const IUserPropertiesPage: React.FC = () => {
  const user = useAppSelector(selectAuthenticatedUser);

  const propertiesStatus = useAppSelector(selectUserPropertiesStatus);
  const properties = useAppSelector(selectUserProperties);

  const { getUserProperties, cleanUpUserProperties } = usePropertiesQuery();

  useEffect(() => {
    getUserProperties({ userId: user._id });

    return () => {
      cleanUpUserProperties();
    };
  }, []);

  return (
    <>
      <Helmet
        image={user.avatar}
        description="User properties"
        path={DYNAMIC_PATHS.user_properties_page(user._id!)}
        title={`${textCapitalize(user.username || "")} | Properties`}
      />

      <UserProperties
        isIUser={true}
        user={user}
        status={propertiesStatus}
        properties={properties}
      />
    </>
  );
};

export default IUserPropertiesPage;
