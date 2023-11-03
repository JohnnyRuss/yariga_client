import React from "react";

import { Box } from "@mui/material";
import { PersonAdd, PersonRemove } from "@mui/icons-material";
import { Button } from "components/Layouts";

interface HireAgentButtonsT {
  hasAgent: boolean;
  onOpenHireAgent: () => void;
  onFireAgent: () => void;
}

const HireAgentButtons: React.FC<HireAgentButtonsT> = ({
  hasAgent,
  onFireAgent,
  onOpenHireAgent,
}) => {
  return (
    <Box mt="10px" width="100%">
      {hasAgent ? (
        <Button
          fullWidth={true}
          icon={<PersonRemove />}
          title="Fire The Agent"
          bgColor="error.main"
          onClick={onFireAgent}
        />
      ) : (
        <Button
          fullWidth={true}
          icon={<PersonAdd />}
          title="Hire The Agent"
          onClick={onOpenHireAgent}
        />
      )}
    </Box>
  );
};

export default HireAgentButtons;
