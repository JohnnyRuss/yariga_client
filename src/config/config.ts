import { RouterHistoryT } from "interface/config/config.types";

const RouterHistory: RouterHistoryT = {
  navigate: () => {},
  location: {
    hash: "",
    key: "",
    pathname: "",
    search: "",
    state: null,
  },
  redirectUnAuthorized: () => {},
  redirectAuthorized: () => {},
};

export { RouterHistory };
