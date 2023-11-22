import SignUp from "components/Auth/SignUp";
import { RouterHistory } from "config/config";

RouterHistory.redirectAuthorized();

const SignUpPage: React.FC = () => {
  return <SignUp />;
};

export default SignUpPage;
