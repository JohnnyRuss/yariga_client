import React from "react";
import { useAppSelector } from "store/hooks";

import paths from "config/paths";
import { selectPropertiesStatus } from "store/selectors/properties.selectors";

import * as UI from "./components";
import { Stack } from "@mui/material";
import { ContentBox, GoBackButton } from "components/Layouts";

const Property: React.FC = () => {
  const status = useAppSelector(selectPropertiesStatus);

  return (
    <ContentBox>
      <GoBackButton path={paths.properties_page}>Property Details</GoBackButton>

      <Stack direction="row" gap={4} className="content__box">
        <UI.PropertyMain>
          <UI.PropertyView loading={status.loading} />

          <UI.PropertyDetailsHeader loading={status.loading} />

          <UI.PropertyRooms loading={status.loading} />

          <UI.PropertyFacilities loading={status.loading} />

          <UI.PropertyDescription loading={status.loading} />
        </UI.PropertyMain>

        <UI.PropertyAside>
          <UI.Agent loading={status.loading} />

          <UI.Map loading={status.loading} />

          <UI.BookButton loading={status.loading} />
        </UI.PropertyAside>
      </Stack>
    </ContentBox>
  );
};

export default Property;
