import React from "react";
// import { useNavigate } from "react-router-dom";

import z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPropertyValidation } from "utils/zod";

import { Box, Stack } from "@mui/material";
import { Button } from "components/Layouts";
import * as Form from "./";
import styles from "./form.module.css";

interface CreatePropertyFormT {}

const CreatePropertyForm: React.FC<CreatePropertyFormT> = () => {
  // const navigate = useNavigate();

  const form = useForm<z.infer<typeof createPropertyValidation>>({
    defaultValues: {
      title: "",
      description: "",
      propertyType: "",
      price: "",
      location: "",
      image: "",
      new_image: "",
    },
    resolver: zodResolver(createPropertyValidation),
  });

  return (
    <Box
      mt={2.5}
      borderRadius="15px"
      padding="20px"
      bgcolor="#fcfcfc"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
    >
      <form className={styles.form}>
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
              placeholder="Description"
              fieldProps={{ ...field }}
              fieldStateProps={{ ...fieldState }}
            />
          )}
        />

        <Stack direction="row" alignItems="flex-start" gap={4}>
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
          name="location"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.FormFileField
              label="Select file"
              fieldProps={{ ...field }}
              fieldStateProps={{ ...fieldState }}
            />
          )}
        />

        <Button
          type="submit"
          title={false ? "Submitting..." : "Submit"}
          bgColor="#475be8"
          color="#fcfcfc"
        />
      </form>
    </Box>
  );
};

export default CreatePropertyForm;
