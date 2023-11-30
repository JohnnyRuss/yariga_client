import { useNavigate } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import { DYNAMIC_PATHS } from "config/paths";
import { selectAgentCredentials } from "store/selectors/agent.selectors";

import { Stack, Typography, Button } from "@mui/material";

interface ActiveListingHeaderT {}

const ActiveListingHeader: React.FC<ActiveListingHeaderT> = () => {
  const navigate = useNavigate();

  const { _id } = useAppSelector(selectAgentCredentials);

  const onViewAll = () => navigate(DYNAMIC_PATHS.agent_properties_page(_id));

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={18} fontWeight={600}>
        Active Listing
      </Typography>

      <Button
        onClick={onViewAll}
        variant="outlined"
        sx={{ color: "app_text.main", borderColor: "app_text.main" }}
      >
        View All
      </Button>
    </Stack>
  );
};

export default ActiveListingHeader;
