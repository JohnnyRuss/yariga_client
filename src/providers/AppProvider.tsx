import { createContext, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useAuth from "hooks/auth/useAuth";
import { RouterHistory } from "config/config";

interface AppContextT {}

interface AppProviderT {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextT>({});

const AppProvider: React.FC<AppProviderT> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { redirectUnAuthorized, redirectAuthorized } = useAuth();

  RouterHistory.location = location;
  RouterHistory.navigate = navigate;
  RouterHistory.redirectUnAuthorized = redirectUnAuthorized;
  RouterHistory.redirectAuthorized = redirectAuthorized;

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export default AppProvider;

export { useAppContext };
