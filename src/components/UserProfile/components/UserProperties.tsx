import React from "react";
import { useAppSelector } from "store/hooks";

import {
  selectUserProperties,
  selectUserPropertiesStatus,
} from "store/selectors/properties.selectors";

import { Stack } from "@mui/material";
import { PropertiesList } from "components/Layouts";
import UserPropertiesHeader from "./UserPropertiesHeader";

interface UserPropertiesT {
  userId: string;
  username: string;
}

const UserProperties: React.FC<UserPropertiesT> = ({ userId, username }) => {
  const status = useAppSelector(selectUserPropertiesStatus);
  const propertiesList = useAppSelector(selectUserProperties);

  return (
    <Stack className="content__box" boxShadow={3} gap={2}>
      <UserPropertiesHeader userId={userId} username={username} />

      <PropertiesList skeletonCount={3} status={status} list={propertiesList} />
    </Stack>
  );
};

export default UserProperties;
