import React from "react";

import FormHelperText from "./FormHelperText";
import { Stack, Typography, Box } from "@mui/material";

import {
  ReactHookFormFieldPropsT,
  ReactHookFormFieldStatePropsT,
} from "interface/form";

interface FormFileFieldT {
  fieldProps: ReactHookFormFieldPropsT;
  fieldStateProps: ReactHookFormFieldStatePropsT;
  label: string;
}

const FormFileField: React.FC<FormFileFieldT> = ({
  fieldProps,
  fieldStateProps,
  label,
}) => {
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
        Select Property Picture
      </Typography>

      <input type="file" hidden accept="image/*" id="property_image" />

      <Box
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
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          alt="property"
        />
      </Box>

      {fieldStateProps.error && (
        <FormHelperText text={fieldStateProps.error.message || ""} />
      )}
    </Stack>
  );
};

export default FormFileField;
