import { lazy, Suspense } from "react";
import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { useRedirectAuthorized } from "hooks/auth";

import { Spinner } from "components/Layouts";
const SignUp = lazy(() => import("components/Auth/SignUp"));

const SignUpPage: React.FC = () => {
  const { loading } = useRedirectAuthorized();

  return loading ? (
    <></>
  ) : (
    <>
      <Helmet
        title="Registration"
        description="Registration to Yariga."
        path={PATHS.auth_page_signup}
      />

      <Suspense fallback={<Spinner />}>
        <SignUp />
      </Suspense>
    </>
  );
};

export default SignUpPage;
