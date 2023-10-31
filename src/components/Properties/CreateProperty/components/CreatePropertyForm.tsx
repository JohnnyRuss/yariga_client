import React from "react";
import { useAppSelector } from "store/hooks";

import {
  selectPropertiesStatus,
  selectPropertySuggestions,
} from "store/selectors/properties.selectors";

import { Controller } from "react-hook-form";
import { useCreatePropertyQuery } from "hooks/api";

import { Box } from "@mui/material";
import * as Form from "components/Layouts/Form";
import { Button, Spinner } from "components/Layouts";
import styles from "./form.module.css";

interface CreatePropertyFormT {}

const CreatePropertyForm: React.FC<CreatePropertyFormT> = () => {
  const { form, onSubmit, onFileChange } = useCreatePropertyQuery();

  const status = useAppSelector(selectPropertiesStatus);

  const suggestions = useAppSelector(selectPropertySuggestions);

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
              fieldProps={field}
              fieldStateProps={fieldState}
            />
          )}
        />

        <Form.FormDuplexBox>
          <Controller
            name="propertyStatus"
            control={form.control}
            render={({ field, fieldState }) => (
              <Form.FormSelectField
                label="Property Status"
                list={suggestions.propertyStatuses}
                fieldProps={field}
                fieldStateProps={fieldState}
              />
            )}
          />

          <Controller
            name="price"
            control={form.control}
            render={({ field, fieldState }) => (
              <Form.FormTextField
                label={
                  form.watch("propertyStatus").value !== "RENT"
                    ? "Price"
                    : "Price Per Day"
                }
                type="number"
                fieldProps={field}
                fieldStateProps={fieldState}
              />
            )}
          />
        </Form.FormDuplexBox>

        <Form.FormDuplexBox>
          <Controller
            name="propertyType"
            control={form.control}
            render={({ field, fieldState }) => (
              <Form.FormSelectField
                label="Property Type"
                list={suggestions.propertyTypes}
                fieldProps={field}
                fieldStateProps={fieldState}
              />
            )}
          />

          <Controller
            name="area"
            control={form.control}
            render={({ field, fieldState }) => (
              <Form.FormTextField
                label="Area (m²)"
                type="number"
                fieldProps={field}
                fieldStateProps={fieldState}
              />
            )}
          />
        </Form.FormDuplexBox>

        <Form.FormDuplexBox>
          <Controller
            name="rooms"
            control={form.control}
            render={({ field, fieldState }) => (
              <Form.FormMultipleSelectField
                label="Rooms"
                list={suggestions.roomTypes}
                fieldProps={field}
                fieldStateProps={fieldState}
              />
            )}
          />

          <Controller
            name="features"
            control={form.control}
            render={({ field, fieldState }) => (
              <Form.FormMultipleSelectField
                list={suggestions.propertyFeatures}
                label="Property Features"
                fieldProps={field}
                fieldStateProps={fieldState}
              />
            )}
          />
        </Form.FormDuplexBox>

        <Form.FormDuplexBox>
          <Controller
            name="bedroomsAmount"
            control={form.control}
            render={({ field, fieldState }) => (
              <Form.FormTextField
                label="Bedrooms Amount"
                fieldProps={field}
                type="number"
                fieldStateProps={fieldState}
              />
            )}
          />

          {form.watch("rooms").some((room) => room.label.includes("bath")) && (
            <Controller
              name="bathroomsAmount"
              control={form.control}
              render={({ field, fieldState }) => (
                <Form.FormTextField
                  label="Bathrooms Amount"
                  type="number"
                  fieldProps={field}
                  fieldStateProps={fieldState}
                />
              )}
            />
          )}
        </Form.FormDuplexBox>

        <Controller
          name="location"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.LocationField
              fieldProps={field}
              fieldStateProps={fieldState}
            />
          )}
        />

        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.FormAutoSizeTextField
              label="Description"
              fieldProps={field}
              fieldStateProps={fieldState}
            />
          )}
        />

        <Controller
          name="new_images"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.FormFileField
              label="Select Property Picture"
              fieldProps={field}
              fieldStateProps={fieldState}
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
          disabled={status.loading}
        />
      </form>
    </Box>
  );
};

export default CreatePropertyForm;
