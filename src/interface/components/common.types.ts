type SnackbarT = {
  open: boolean;
  message: string;
  severity: "success" | "error";
};

type DialogT = {
  open?: boolean;
  title?: string;
  titleAlignment?: "center" | "start";
  message: string;
  messageAlignment?: "center" | "start";
  keyWord?: string;
  onConfirm: () => void;
  variant?: "success" | "danger";
};

export type { SnackbarT, DialogT };
