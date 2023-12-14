import { useRef } from "react";

import FormHelperText from "./FormHelperText";
import { Stack, Typography } from "@mui/material";
import FormFileFieldSelectedList from "./components/FormFileFieldSelectedList";

import {
  FileChangeEventT,
  ReactHookFormFileFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/components/form.types";

interface FormFileFieldT {
  label: string;
  onFileChange: FileChangeEventT;
  fieldProps: ReactHookFormFileFieldPropsT;
  fieldStateProps: ReactHookFormFieldStatePropsT;
  onRemoveFile: (fileURL: string) => void;
}

const FormFileField: React.FC<FormFileFieldT> = ({
  label,
  fieldProps,
  onFileChange,
  onRemoveFile,
  fieldStateProps,
}) => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  return (
    <Stack direction="column" gap={2}>
      <Typography
        component="label"
        htmlFor="property_image"
        my="10px"
        padding="4px 0"
        width="100%"
        textAlign="center"
        borderRadius="5px"
        fontSize={16}
        fontWeight={500}
        color="app_text.light"
        bgcolor="app_blue.light"
        sx={{ cursor: "pointer" }}
      >
        {label}
      </Typography>

      <input
        type="file"
        hidden
        accept="image/*"
        id="property_image"
        ref={fileRef}
        onBlur={(e) => {
          fieldProps.onBlur && fieldProps.onBlur(e);
          if (fileRef.current) fileRef.current.value = "";
        }}
        name={fieldProps.name}
        multiple={true}
        disabled={fieldProps.disabled}
        onChange={(e) => onFileChange(e, fieldProps.onChange)}
      />

      {fieldProps.value.length > 0 && (
        <FormFileFieldSelectedList
          value={fieldProps.value}
          onRemoveFile={onRemoveFile}
        />
      )}

      {fieldStateProps.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </Stack>
  );
};

export default FormFileField;
