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

type EmojiT = {
  emoticons: Array<string>;
  id: string;
  keywords: Array<string>;
  name: string;
  native: string;
  shortcodes: string;
  unified: string;
};

export type { SnackbarT, DialogT, EmojiT };
