/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, Suspense, lazy } from "react";
import { useAppSelector } from "store/hooks";
import Helmet from "pages/Helmet";

import {
  selectUserProperties,
  selectUserPropertiesStatus,
} from "store/selectors/properties.selectors";
import { DYNAMIC_PATHS } from "config/paths";
import { textCapitalize } from "utils";
import { useRedirectUnAuthorized } from "hooks/auth";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";
import { usePropertiesQuery } from "hooks/api/properties";

import { Spinner } from "components/Layouts";
import AppLayout from "components/AppLayout/AppLayout";
const UserProperties = lazy(
  () => import("components/UserProfile/UserProperties")
);

const IUserPropertiesPage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

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

  return loading ? (
    <></>
  ) : (
    <>
      <Helmet
        image={user.avatar}
        description="User properties"
        path={DYNAMIC_PATHS.user_properties_page(user._id!)}
        title={`${textCapitalize(user.username || "")} | Properties`}
      />

      <AppLayout>
        <Suspense fallback={<Spinner />}>
          <UserProperties
            isIUser={true}
            user={user}
            status={propertiesStatus}
            properties={properties}
          />
        </Suspense>
      </AppLayout>
    </>
  );
};

export default IUserPropertiesPage;
