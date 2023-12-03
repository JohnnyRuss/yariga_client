import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/config";

import UpdatePassword from "components/Auth/UpdatePassword";

RouterHistory.redirectAuthorized();

const UpdatePasswordPage: React.FC = () => {
  return (
    <>
      <Helmet
        title="Update Password"
        description="Update Yariga password"
        path={PATHS.auth_page_update_password}
        disAllowCrawler={true}
      />

      <UpdatePassword />
    </>
  );
};

export default UpdatePasswordPage;
