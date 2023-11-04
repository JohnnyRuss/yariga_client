import React from "react";
import { useAppSelector } from "store/hooks";

import { selectSinglePropertyStatus } from "store/selectors/properties.selectors";

import * as UI from "./components";
import { Stack } from "@mui/material";
import { ContentBox, GoBackButton } from "components/Layouts";

const Property: React.FC = () => {
  const status = useAppSelector(selectSinglePropertyStatus);

  return (
    <ContentBox>
      <GoBackButton>Property Details</GoBackButton>

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
