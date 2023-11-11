import { HTMLAttributes } from "react";
import { SxProps } from "@mui/material";

export interface CustomButtonPropsT {
  type?: "button" | "submit";
  title: string;
  bgColor?: string;
  color?: string;
  variant?: "contained" | "outlined" | "text";
  fullWidth?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  attributes?: HTMLAttributes | SxProps;
}

export interface SnackbarT {
  open: boolean;
  message: string;
  severity: "success" | "error";
}

export interface DialogT {
  open?: boolean;
  title?: string;
  titleAlignment?: "center" | "start";
  message: string;
  messageAlignment?: "center" | "start";
  keyWord?: string;
  onConfirm: () => void;
  variant?: "success" | "danger";
}

export interface FormPropsT {
  type: string;
  register: any;
  onFinish: (
    values: FieldValues
  ) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>;
  formLoading: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  handleImageChange: (file) => void;
  onFinishHandler: (data: FieldValues) => Promise<void> | void;
  propertyImage: { name: string; url: string };
}
