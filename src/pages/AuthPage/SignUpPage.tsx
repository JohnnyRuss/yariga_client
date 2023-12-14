import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { useRedirectAuthorized } from "hooks/auth";

import SignUp from "components/Auth/SignUp";

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

      <SignUp />
    </>
  );
};

export default SignUpPage;
