import { lazy, Suspense } from "react";
import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { useRedirectAuthorized } from "hooks/auth";

import { Spinner } from "components/Layouts";
const SignIn = lazy(() => import("components/Auth/SignIn"));

const SignInPage: React.FC = () => {
  const { loading } = useRedirectAuthorized();

  return loading ? (
    <></>
  ) : (
    <>
      <Helmet
        title="Login"
        description="Login to Yariga."
        path={PATHS.auth_page_signin}
      />

      <Suspense fallback={<Spinner />}>
        <SignIn />
      </Suspense>
    </>
  );
};

export default SignInPage;
