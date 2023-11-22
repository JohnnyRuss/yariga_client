import Messages from "components/Messages/Messages";

import { RouterHistory } from "config/config";

RouterHistory.redirectUnAuthorized();

const MessagesPage: React.FC = () => {
  return <Messages />;
};

export default MessagesPage;
