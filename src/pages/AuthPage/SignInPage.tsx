import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/config";

import SignIn from "components/Auth/SignIn";

RouterHistory.redirectAuthorized();

const SignInPage: React.FC = () => {
  return (
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
