import { useAppSelector } from "store/hooks";

import { selectSinglePropertyStatus } from "store/selectors/properties.selectors";

import * as UI from "./components";
import { Stack, Divider, Box } from "@mui/material";
import { ContentBox, GoBackButton } from "components/Layouts";

const Property: React.FC = () => {
  const status = useAppSelector(selectSinglePropertyStatus);

  return (
    <ContentBox>
      <Box bgcolor={{ xs: "app_bg.main", app_mobile: "transparent" }}>
        <GoBackButton>Property Details</GoBackButton>
      </Box>

      <Stack
        gap={4}
        pt={0}
        boxSizing="border-box"
        className="content__box"
        direction={{ xs: "column", md: "row" }}
      >
        <UI.PropertyMain>
          <UI.PropertyView loading={status.loading} />

          <UI.PropertyDetailsHeader loading={status.loading} />

          <UI.PropertyRooms loading={status.loading} />

          <UI.PropertyFacilities loading={status.loading} />

          <UI.PropertyDescription loading={status.loading} />

          <Divider />

          <UI.Reviews loading={status.loading} />

          <Divider />

          {!status.loading && <UI.RelatedProperties />}
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
