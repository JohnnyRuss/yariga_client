import React from "react";
import { useAppSelector } from "store/hooks";

import { selectPropertiesStatus } from "store/selectors/properties.selectors";

import * as UI from "./components";
import { Stack } from "@mui/material";
import { Spinner, ContentBox, GoBackButton } from "components/Layouts";

const Property: React.FC = () => {
  const status = useAppSelector(selectPropertiesStatus);

  return (
    <ContentBox>
      <GoBackButton>Details</GoBackButton>

      {status.loading && <Spinner />}

      {!status.loading && (
        <Stack direction="row" gap={4}>
          <UI.PropertyMain>
            <UI.PropertyView />

            <UI.PropertyDetailsHeader />

            <UI.PropertyFacilities />

            <UI.PropertyDescription />
          </UI.PropertyMain>

          <UI.PropertyAside>
            <UI.Agent />

            <UI.Map />

            <UI.BookButton />
          </UI.PropertyAside>
        </Stack>
      )}
    </ContentBox>
  );
};

export default Property;
