import React from "react";
// import { useNavigate } from "react-router-dom";

import { Controller } from "react-hook-form";
import { useCreatePropertyQuery } from "hooks/api";

import { Box, Stack } from "@mui/material";
import { Button } from "components/Layouts";
import * as Form from "./";
import styles from "./form.module.css";

interface CreatePropertyFormT {}

const CreatePropertyForm: React.FC<CreatePropertyFormT> = () => {
  // const navigate = useNavigate();
  const { form, onSubmit, onFileChange } = useCreatePropertyQuery();

  return (
    <Box
      mt={2.5}
      borderRadius="15px"
      padding="20px"
      bgcolor="app_text.light"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
    >
      <form className={styles.form} onSubmit={onSubmit}>
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.FormTextField
              label="Title"
              fieldProps={{ ...field }}
              fieldStateProps={{ ...fieldState }}
            />
          )}
        />

        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.FormAutoSizeTextField
              label="Description"
              fieldProps={{ ...field }}
              fieldStateProps={{ ...fieldState }}
            />
          )}
        />

        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ md: "flex-start" }}
          gap={4}
        >
          <Controller
            name="propertyType"
            control={form.control}
            render={({ field, fieldState }) => (
              <Form.FormSelectField
                label="Property Type"
                fieldProps={{ ...field }}
                fieldStateProps={{ ...fieldState }}
              />
            )}
          />

          <Controller
            name="price"
            control={form.control}
            render={({ field, fieldState }) => (
              <Form.FormTextField
                label="Price"
                fieldProps={{ ...field }}
                fieldStateProps={{ ...fieldState }}
              />
            )}
          />
        </Stack>

        <Controller
          name="location"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.FormTextField
              label="Location"
              fieldProps={{ ...field }}
              fieldStateProps={{ ...fieldState }}
            />
          )}
        />

        <Controller
          name="new_images"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.FormFileField
              label="Select Property Picture"
              fieldProps={{ ...field }}
              fieldStateProps={{ ...fieldState }}
              onFileChange={onFileChange}
            />
          )}
        />

        <Button
          type="submit"
          title={false ? "Submitting..." : "Submit"}
          bgColor="app_blue.light"
          color="app_text.light"
          fullWidth={true}
        />
      </form>
    </Box>
  );
};

export default CreatePropertyForm;
