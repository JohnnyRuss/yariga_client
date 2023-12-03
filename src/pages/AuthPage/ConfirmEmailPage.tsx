import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/config";

import ConfirmEmail from "components/Auth/ConfirmEmail";

RouterHistory.redirectAuthorized();

const ConfirmEmailPage: React.FC = () => {
  return (
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
