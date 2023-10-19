import React from "react";
import { useAppSelector } from "store/hooks";

import { selectPropertiesStatus } from "store/selectors/properties.selectors";

import { Controller } from "react-hook-form";
import { useCreatePropertyQuery } from "hooks/api";

import * as Form from "./";
import { Box, Stack } from "@mui/material";
import { Button, Spinner } from "components/Layouts";
import styles from "./form.module.css";

interface CreatePropertyFormT {}

const CreatePropertyForm: React.FC<CreatePropertyFormT> = () => {
  const { form, onSubmit, onFileChange } = useCreatePropertyQuery();

  const status = useAppSelector(selectPropertiesStatus);

  return (
    <Box
      mt={2.5}
      padding="20px"
      borderRadius="15px"
      bgcolor="app_text.light"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
    >
      {status.loading && <Spinner />}

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
                fieldProps={{
                  ...field,
                  value: field.value ? field.value.toString() : "",
                  onChange: (e) =>
                    field.onChange(+(e.target as HTMLInputElement).value),
                }}
                fieldStateProps={{ ...fieldState }}
              />
            )}
          />
        </Stack>

        <Controller
          name="location"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.LocationField
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
