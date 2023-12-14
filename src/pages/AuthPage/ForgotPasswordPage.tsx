import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { useRedirectAuthorized } from "hooks/auth";

import ForgotPassword from "components/Auth/ForgotPassword";

const ForgotPasswordPage: React.FC = () => {
  const { loading } = useRedirectAuthorized();

  return loading ? (
    <></>
  ) : (
    <>
      <Helmet
        title="Forgot Password"
        description="Update Yariga password"
        path={PATHS.auth_page_forgot_password}
        disAllowCrawler={true}
      />

      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
