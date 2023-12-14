import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { useRedirectAuthorized } from "hooks/auth";

import SignIn from "components/Auth/SignIn";

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

      <SignIn />
    </>
  );
};

export default SignInPage;
