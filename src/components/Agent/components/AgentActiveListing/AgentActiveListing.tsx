import { useAppSelector } from "store/hooks";

import {
  selectAgentProperties,
  selectAgentPropertiesStatus,
} from "store/selectors/properties.selectors";

import { Box } from "@mui/material";
import { PropertiesList } from "components/Layouts";
import ActiveListingHeader from "./ActiveListingHeader";

interface AgentActiveListingT {}

const AgentActiveListing: React.FC<AgentActiveListingT> = () => {
  const status = useAppSelector(selectAgentPropertiesStatus);
  const propertiesList = useAppSelector(selectAgentProperties);

  return (
    <Box
      boxShadow={3}
      sx={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "app_bg.main",
      }}
    >
      <ActiveListingHeader />

      <PropertiesList
        status={status}
        list={propertiesList}
        skeletonCount={3}
        containerSx={{ marginTop: ["-10px", "0px"] }}
      />
    </Box>
  );
};

export default AgentActiveListing;
