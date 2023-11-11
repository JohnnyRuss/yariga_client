import React from "react";

import { Box } from "@mui/material";
import { ContentBox, GoBackButton, PropertiesList } from "components/Layouts";

import { UserT } from "interface/db/user.types";
import { LoadingStatusT } from "interface/store/common.types";
import { PropertyShortInfoT } from "interface/db/properties.types";

interface UserPropertiesT {
  user: UserT;
  status: LoadingStatusT;
  properties: Array<PropertyShortInfoT>;
  isIUser: boolean;
}

const UserProperties: React.FC<UserPropertiesT> = ({
  user,
  isIUser,
  status,
  properties,
}) => {
  const userFirstName = user.username.split(" ")[0];

  return (
    <ContentBox>
      <GoBackButton>
        {isIUser ? `Your Properties` : `${userFirstName}'s Properties`}
      </GoBackButton>

      <Box className="content__box" height="92%">
        <PropertiesList
          list={properties}
          status={status}
          skeletonCount={12}
          containerSx={{ marginTop: ["-15px", "20px"] }}
        />
      </Box>
    </ContentBox>
  );
};

export default UserProperties;
