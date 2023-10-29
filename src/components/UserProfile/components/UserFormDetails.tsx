import React from "react";

import { Stack } from "@mui/material";
import { Button } from "components/Layouts";
import { Phone, Email } from "@mui/icons-material";
import { LocationField, FormTextField } from "components/Layouts/Form";

import { UserT } from "interface/db/user.types";

interface UserFormDetailsT {
  email: UserT["email"];
  phone?: UserT["phone"];
  location?: UserT["location"];
  onCancelEdit: () => void;
}

const UserFormDetails: React.FC<UserFormDetailsT> = ({
  email,
  phone,
  location,
  onCancelEdit,
}) => {
  return (
    <Stack mt="30px">
      <LocationField
        showIcon={true}
        fieldProps={{
          name: "address",
          onChange: () => {},
          value: {
            name: location?.name || "",
            display_name: location?.displayName || "",
            addresstype: location?.addressType || "",
            country: location?.country || "",
            city: location?.city || "",
            state: location?.state || "",
            lat: location?.lat || "",
            lon: location?.lon || "",
          },
        }}
      />

      <Stack direction="row" gap={3} mt="20px">
        <FormTextField
          label="Phone Number"
          icon={<Phone />}
          fieldProps={{
            name: "phone",
            onChange: () => {},
            value: phone || "",
          }}
        />

        <FormTextField
          label="Email"
          icon={<Email />}
          fieldProps={{
            name: "email",
            onChange: () => {},
            value: email || "",
          }}
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
          onClick={onCancelEdit}
          color="app_text.main"
          bgColor="app_bg.contrastText"
        />

        <Button title="Save" />
      </Stack>
    </Stack>
  );
};

export default UserFormDetails;
