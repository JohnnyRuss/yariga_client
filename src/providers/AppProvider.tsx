/* eslint-disable react-hooks/exhaustive-deps */
import { useAppSelector } from "store/hooks";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { RouterHistory } from "config/config";
import { useChatQuery } from "hooks/api/chat";
import { useCheckIsAuthenticatedUser } from "hooks/auth";

import { Snackbar, Dialog } from "components/Layouts";
import { SnackbarT, DialogT } from "interface/components/common.types";

interface AppContextT {
  setSnackbar: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      message: string;
      severity: "success" | "error";
    }>
  >;
  activateDialog: (args: DialogT) => void;
}

interface AppProviderT {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextT>({
  setSnackbar: () => {},
  activateDialog: () => {},
});

const AppProvider: React.FC<AppProviderT> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  ///////////////////////////////////////////////
  ////////////// Router History ////////////////

  RouterHistory.location = location;
  RouterHistory.navigate = navigate;
  RouterHistory.activeUser = useAppSelector((state) => state.user.user);

  /////////////////////////////////////////
  ////////////// Snackbar ////////////////

  const [snackbar, setSnackbar] = useState<SnackbarT>({
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

  ///////////////////////////////////////
  ////////////// Dialog ////////////////

  const dialogDefaults: DialogT = {
    open: false,
    title: "",
    titleAlignment: "start",
    message: "",
    messageAlignment: "center",
    keyWord: "",
    onConfirm: () => {},
    variant: "success",
  };

  const [dialog, setDialog] = useState<DialogT>(dialogDefaults);

  const onCloseDialog = () => setDialog(() => ({ ...dialogDefaults }));

  const activateDialog = (args: DialogT) => {
    setDialog((prev) => ({
      ...prev,
      open: true,
      title: args.title || "",
      titleAlignment: args.titleAlignment || "start",
      message: args.message || "",
      messageAlignment: args.messageAlignment || "center",
      keyWord: args.keyWord || "",
      onConfirm: () => {
        args.onConfirm();
        onCloseDialog();
      },
      variant: args.variant || "danger",
    }));
  };

  ////////////////////////////////////////////
  ////////////// APP GLOBALS ////////////////

  const { isAuthenticated } = useCheckIsAuthenticatedUser(true);
  const { getUnreadConversations } = useChatQuery();

  useEffect(() => {
    if (!isAuthenticated) return;

    getUnreadConversations();
  }, [isAuthenticated]);

  return (
    <AppContext.Provider value={{ setSnackbar, activateDialog }}>
      <Snackbar
        open={snackbar.open}
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={onCloseSnackbar}
      />

      <Dialog dialog={dialog} onClose={onCloseDialog} />

      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default AppProvider;

export { useAppContext };
