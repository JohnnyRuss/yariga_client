/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { useLocation, useNavigate } from "react-router-dom";

import {
  selectPropertySuggestions,
  selectCreatePropertyStatus,
} from "store/selectors/createPropertyForm.selectors";
import { useSearchParams } from "hooks/utils";

import { Controller } from "react-hook-form";
import { useCreatePropertyQuery } from "hooks/api/properties";

import { Box } from "@mui/material";
import styles from "./form.module.css";
import * as Form from "components/Layouts/Form";
import { Button, Spinner } from "components/Layouts";

import { CreatePropertyFormT } from "utils/zod/createPropertyValidation";

const CreatePropertyForm: React.FC = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const isUpdating: boolean = state?.isUpdating || false;
  const propertyDefaults: CreatePropertyFormT | undefined = state?.property;

  const { form, onSubmit, onFileChange, onRemoveFile } =
    useCreatePropertyQuery(isUpdating);

  const status = useAppSelector(selectCreatePropertyStatus);
  const suggestions = useAppSelector(selectPropertySuggestions);

  const { getParamValue } = useSearchParams();

  useEffect(() => {
    if (!isUpdating && (getParamValue("process") || getParamValue("property")))
      return navigate(-1);

    if (!isUpdating || !propertyDefaults || status.loading) return;

    form.reset({
      ...propertyDefaults,
      propertyStatus: {
        ...propertyDefaults.propertyStatus,
        _id:
          propertyDefaults.propertyStatus._id ||
          suggestions.propertyStatuses.find(
            (status) => status.value === propertyDefaults.propertyStatus.value
          )?._id ||
          "",
      },
    });
  }, [state, status.loading]);

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
          name="images"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.FormFileField
              label="Select Property Picture"
              fieldProps={field}
              onRemoveFile={onRemoveFile}
              fieldStateProps={fieldState}
              onFileChange={onFileChange}
            />
          )}
        />

        <Button
          type="submit"
          title={
            status.loading
              ? "IsProcessing..."
              : isUpdating
              ? "Update"
              : "Submit"
          }
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
