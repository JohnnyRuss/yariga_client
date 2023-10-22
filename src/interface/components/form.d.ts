import { FieldError } from "react-hook-form";
import { OpenStreetMapLocationT } from "interface/config/config.types";
import { ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";

interface CommonT {
  name: string;
  disabled?: boolean | undefined;
  ref?:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

interface CommonValueT {
  label: string;
  value: string;
  _id: string;
}

export interface ReactHookFormTextFieldPropsT extends CommonT {
  value: string;
  onChange: (value: string) => void;
}

export interface ReactHookFormSelectFieldPropsT extends CommonT {
  value: CommonValueT;
  onChange: (
    value: CommonValueT,
    e?: SelectChangeEvent | null,
    targetName?: string
  ) => void;
}

export interface ReactHookFormMultipleSelectFieldPropsT extends CommonT {
  value: CommonValueT[];
  onChange: (
    value: Array<CommonValueT>,
    e?: SelectChangeEvent<CommonValueT[]> | null
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
