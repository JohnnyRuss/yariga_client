import { FieldError } from "react-hook-form";

export interface ReactHookFormFieldPropsT {
  name: string;
  value: string;
  disabled?: boolean | undefined;
  ref:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;
  onChange: (e: React.ChangeEvent) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
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
