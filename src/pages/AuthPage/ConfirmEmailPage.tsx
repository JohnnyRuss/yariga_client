import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { useRedirectAuthorized } from "hooks/auth";

import ConfirmEmail from "components/Auth/ConfirmEmail";

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

      <ConfirmEmail />
    </>
  );
};

export default ConfirmEmailPage;
