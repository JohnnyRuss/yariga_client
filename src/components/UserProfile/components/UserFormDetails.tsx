/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";

import { Controller } from "react-hook-form";
import { useEditProfileQuery } from "hooks/api";
import { selectEditProfileStatus } from "store/selectors/user.selectors";

import { Stack } from "@mui/material";
import { Phone, Email } from "@mui/icons-material";
import * as Form from "components/Layouts/Form";
import { Button, Spinner } from "components/Layouts";

import { UserT } from "interface/db/user.types";

interface UserFormDetailsT {
  email: UserT["email"];
  phone?: UserT["phone"];
  location?: UserT["location"];
  onCancelEdit: (e: React.MouseEvent) => void;
}

const UserFormDetails: React.FC<UserFormDetailsT> = ({
  email,
  phone,
  location,
  onCancelEdit,
}) => {
  const status = useAppSelector(selectEditProfileStatus);

  const { form, onSubmit } = useEditProfileQuery();

  useEffect(() => {
    form.reset({
      email: email || "",
      phone: phone || "",
      location: location || {
        name: "",
        displayName: "",
        addressType: "",
        country: "",
        city: "",
        state: "",
        lat: "",
        lon: "",
      },
    });
  }, [email, phone, location]);

  return (
    <Stack mt="30px" position="relative">
      {status.loading && <Spinner />}

      <form onSubmit={onSubmit}>
        <Controller
          control={form.control}
          name="location"
          render={({ field, fieldState }) => (
            <Form.LocationField
              showIcon={true}
              fieldProps={field}
              fieldStateProps={fieldState}
            />
          )}
        />

        <Stack direction="row" gap={3} mt="20px">
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Form.FormTextField
                label="Phone Number"
                icon={<Phone />}
                fieldProps={field}
                fieldStateProps={fieldState}
              />
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Form.FormTextField
                label="Email"
                icon={<Email />}
                fieldProps={field}
                fieldStateProps={fieldState}
              />
            )}
          />
        </Stack>

        <Stack
          direction="row"
          gap={2}
          width="100%"
          justifyContent="flex-end"
          mt="30px"
        >
          <Button
            title="Cancel"
            type="button"
            onClick={onCancelEdit}
            color="app_text.main"
            bgColor="app_bg.contrastText"
            disabled={status.loading}
          />

          <Button title="Save" type="submit" disabled={status.loading} />
        </Stack>
      </form>
    </Stack>
  );
};

export default UserFormDetails;
