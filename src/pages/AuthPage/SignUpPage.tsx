import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/config";

import SignUp from "components/Auth/SignUp";

RouterHistory.redirectAuthorized();

const SignUpPage: React.FC = () => {
  return (
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
