import React from "react";

import { Stack } from "@mui/material";
import { PropertiesList } from "components/Layouts";
import UserPropertiesHeader from "./UserPropertiesHeader";

interface UserPropertiesT {
  userId: string;
}

const UserProperties: React.FC<UserPropertiesT> = ({ userId }) => {
  return (
    <Stack className="content__box" boxShadow={3} gap={2}>
      <UserPropertiesHeader userId={userId} />

      <PropertiesList skeletonCount={3} />
    </Stack>
  );
};

export default UserProperties;
