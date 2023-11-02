import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useAuth from "hooks/auth/useAuth";
import { RouterHistory } from "config/config";

import { Snackbar } from "components/Layouts";

interface AppContextT {
  setSnackbar: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      message: string;
      severity: "success" | "error";
    }>
  >;
}

interface AppProviderT {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextT>({
  setSnackbar: () => {},
});

const AppProvider: React.FC<AppProviderT> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  ///////////////////////////////////////////////
  ////////////// Router History ////////////////

  const { redirectUnAuthorized, redirectAuthorized } = useAuth();

  RouterHistory.location = location;
  RouterHistory.navigate = navigate;
  RouterHistory.redirectUnAuthorized = redirectUnAuthorized;
  RouterHistory.redirectAuthorized = redirectAuthorized;

  /////////////////////////////////////////
  ////////////// Snackbar ////////////////

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const onCloseSnackbar = () =>
    setSnackbar({
      open: false,
      message: "",
      severity: "success",
    });

  return (
    <AppContext.Provider value={{ setSnackbar }}>
      <Snackbar
        open={snackbar.open}
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={onCloseSnackbar}
      />

      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default AppProvider;

export { useAppContext };
