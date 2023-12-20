import { lazy, Suspense } from "react";
import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { useRedirectAuthorized } from "hooks/auth";

import { Spinner } from "components/Layouts";
const UpdatePassword = lazy(() => import("components/Auth/UpdatePassword"));

const UpdatePasswordPage: React.FC = () => {
  const { loading } = useRedirectAuthorized();

  return loading ? (
    <></>
  ) : (
    <>
      <Helmet
        title="Update Password"
        description="Update Yariga password"
        path={PATHS.auth_page_update_password}
        disAllowCrawler={true}
      />

      <Suspense fallback={<Spinner />}>
        <UpdatePassword />
      </Suspense>
    </>
  );
};

export default UpdatePasswordPage;
