import React from "react";

import { Box } from "@mui/material";
import { PersonAdd, PersonRemove } from "@mui/icons-material";
import { Button } from "components/Layouts";

interface HireAgentButtonsT {
  hasAgent: boolean;
  setOpenHireAgent: React.Dispatch<React.SetStateAction<boolean>>;
}

const HireAgentButtons: React.FC<HireAgentButtonsT> = ({
  hasAgent,
  setOpenHireAgent,
}) => {
  return (
    <Box mt="10px" width="100%">
      {hasAgent ? (
        <Button
          fullWidth={true}
          icon={<PersonRemove />}
          title="Fire The Agent"
          bgColor="error.main"
          onClick={() => setOpenHireAgent(true)}
        />
      ) : (
        <Button
          fullWidth={true}
          icon={<PersonAdd />}
          title="Hire The Agent"
          onClick={() => setOpenHireAgent(true)}
        />
      )}
    </Box>
  );
};

export default HireAgentButtons;
