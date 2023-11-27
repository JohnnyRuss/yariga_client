import Messages from "components/Messages/Messages";

import { RouterHistory } from "config/config";
import MessengerProvider from "providers/MessengerProvider";

RouterHistory.redirectUnAuthorized();

const MessagesPage: React.FC = () => {
  return (
    <MessengerProvider>
      <Messages />
    </MessengerProvider>
  );
};

export default MessagesPage;
