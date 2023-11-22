import { useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";

import FormHelperText from "./FormHelperText";
import { Stack, Typography } from "@mui/material";
import styles from "./form.module.css";

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
          fieldProps.onBlur && fieldProps.onBlur(e);
          if (fileRef.current) fileRef.current.value = "";
        }}
        name={fieldProps.name}
        multiple={true}
        disabled={fieldProps.disabled}
        onChange={(e) => onFileChange(e, fieldProps.onChange)}
      />

      <div className={styles.chosenMediaContainer}>
        {fieldProps.value[0] &&
          fieldProps.value.slice(0, 6).map((base64, index) => (
            <figure key={nanoid()} className={styles.chosenMediaFig}>
              <img src={base64} alt="property" />
              {fieldProps.value.length > 6 && index === 5 && (
                <span className={styles.extraAssetsLayout}>
                  +{fieldProps.value.length - 6}
                </span>
              )}
            </figure>
          ))}
      </div>

      {fieldStateProps.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </Stack>
  );
};

export default FormFileField;
