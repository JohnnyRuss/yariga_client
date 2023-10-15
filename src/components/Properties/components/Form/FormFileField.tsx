import React, { useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";

import FormHelperText from "./FormHelperText";
import { Stack, Typography, Box } from "@mui/material";

import {
  ReactHookFormFieldPropsT,
  ReactHookFormFieldStatePropsT,
  FileChangeEventT,
} from "interface/components/form";

interface FieldPropsT
  extends Omit<ReactHookFormFieldPropsT, "value" | "onChange"> {
  value: string[];
  onChange: (value: string[]) => void;
}

interface FormFileFieldT {
  fieldProps: FieldPropsT;
  fieldStateProps: ReactHookFormFieldStatePropsT;
  onFileChange: FileChangeEventT;
  label: string;
}

const FormFileField: React.FC<FormFileFieldT> = ({
  fieldProps,
  fieldStateProps,
  label,
  onFileChange,
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
          fieldProps.onBlur(e);
          if (fileRef.current) fileRef.current.value = "";
        }}
        name={fieldProps.name}
        disabled={fieldProps.disabled}
        onChange={(e) => onFileChange(e, fieldProps.onChange)}
      />

      {fieldProps.value[0] &&
        fieldProps.value.map((base64) => (
          <Box
            key={nanoid()}
            component="figure"
            width="100%"
            height="200px"
            overflow="hidden"
            borderRadius="5px"
            bgcolor="app_text.light"
          >
            <img
              style={{
                objectFit: "contain",
                width: "100%",
                maxWidth: "100%",
                maxHeight: "100%",
                height: "100%",
              }}
              src={base64}
              alt="property"
            />
          </Box>
        ))}

      {fieldStateProps.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </Stack>
  );
};

export default FormFileField;
