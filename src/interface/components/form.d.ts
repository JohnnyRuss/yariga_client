import { FieldError } from "react-hook-form";
import { OpenStreetMapLocationT } from "interface/config/config.types";
import { ChangeEvent } from "react";

interface CommonT {
  name: string;
  disabled?: boolean | undefined;
  ref:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export interface ReactHookFormTextFieldPropsT extends CommonT {
  value: string;
  onChange: (value: string) => void;
}

export interface ReactHookFormSelectFieldPropsT extends CommonT {
  value: { value: string; _id: string };
  onChange: (value: { value: string; _id: string }) => void;
}

export interface ReactHookFormMultipleSelectFieldPropsT extends CommonT {
  value: { label: string; value: string }[];
  onChange: (
    event: SelectChangeEvent<{ label: string; value: string }>
  ) => void;
}

export interface ReactHookFormFileFieldPropsT extends CommonT {
  value: string[];
  onChange: (value: string[]) => void;
}

export interface ReactHookFormLocationFieldPropsT extends CommonT {
  value: OpenStreetMapLocationT;
  onChange: (args: OpenStreetMapLocationT) => void;
}

export interface ReactHookFormFieldStatePropsT {
  invalid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  error?: FieldError | undefined;
}

export type FileChangeEventT = (
  event: React.ChangeEvent<HTMLInputElement>,
  fieldChangeEvent: (value: string[]) => void
) => void;
