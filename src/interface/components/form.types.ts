import { FieldError } from "react-hook-form";
import { SelectChangeEvent } from "@mui/material";
import { OpenStreetMapLocationT } from "interface/config/config.types";

type FormCommonT = {
  name: string;
  disabled?: boolean | undefined;
  ref?:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

type CommonValueT = {
  label: string;
  value: string;
  _id: string;
};

type ReactHookFormTextFieldPropsT = FormCommonT & {
  value: string;
  onChange: (value: string) => void;
};

type ReactHookFormSelectFieldPropsT = FormCommonT & {
  value: CommonValueT;
  onChange: (
    value: CommonValueT,
    e?: SelectChangeEvent | null,
    targetName?: string
  ) => void;
};

type ReactHookFormMultipleSelectFieldPropsT = FormCommonT & {
  value: CommonValueT[];
  onChange: (
    value: Array<CommonValueT>,
    e?: SelectChangeEvent<CommonValueT[]> | null
  ) => void;
};

type ReactHookFormFileFieldPropsT = FormCommonT & {
  value: string[];
  onChange: (value: string[]) => void;
};

type ReactHookFormLocationFieldPropsT = FormCommonT & {
  value: OpenStreetMapLocationT;
  onChange: (args: OpenStreetMapLocationT) => void;
};

type ReactHookFormFieldStatePropsT = {
  invalid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  error?: FieldError | undefined;
};

type FileChangeEventT = (
  event: React.ChangeEvent<HTMLInputElement>,
  fieldChangeEvent: (value: string[]) => void
) => void;

export type {
  ReactHookFormSelectFieldPropsT,
  ReactHookFormMultipleSelectFieldPropsT,
  ReactHookFormFileFieldPropsT,
  ReactHookFormLocationFieldPropsT,
  ReactHookFormFieldStatePropsT,
  FileChangeEventT,
  ReactHookFormTextFieldPropsT,
};
