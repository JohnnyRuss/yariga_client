import Helmet from "pages/Helmet";

import { PATHS } from "config/paths";
import { useRedirectAuthorized } from "hooks/auth";

import UpdatePassword from "components/Auth/UpdatePassword";

const UpdatePasswordPage: React.FC = () => {
  const { loading } = useRedirectAuthorized();

  return loading ? (
    <></>
  ) : (
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
