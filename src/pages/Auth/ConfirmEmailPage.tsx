import { lazy, Suspense } from "react";
import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { useRedirectAuthorized } from "hooks/auth";

import { Spinner } from "components/Layouts";
const ConfirmEmail = lazy(() => import("components/Auth/ConfirmEmail"));

const ConfirmEmailPage: React.FC = () => {
  const { loading } = useRedirectAuthorized();

  return loading ? (
    <></>
  ) : (
    <>
      <Helmet
        title="Confirm Password"
        description="Confirm Yariga password"
        path={PATHS.auth_page_confirm_email}
        disAllowCrawler={true}
      />

      <Suspense fallback={<Spinner />}>
        <ConfirmEmail />
      </Suspense>
    </>
  );
};

export default ConfirmEmailPage;
