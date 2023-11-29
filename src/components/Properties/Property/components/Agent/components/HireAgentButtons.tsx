import { Box } from "@mui/material";
import { Button } from "components/Layouts";
import { PersonAdd, PersonRemove } from "@mui/icons-material";

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
    <Box width="100%" p={1}>
      {hasAgent ? (
        <Button
          fullWidth={true}
          icon={<PersonRemove />}
          title="Fire The Agent"
          bgColor="error.main"
          onClick={onFireAgent}
          attributes={{
            sx: { padding: "10px 15px" },
          }}
        />
      ) : (
        <Button
          fullWidth={true}
          icon={<PersonAdd />}
          title="Hire The Agent"
          onClick={onOpenHireAgent}
          attributes={{
            sx: { padding: "10px 15px" },
          }}
        />
      )}
    </Box>
  );
};

export default HireAgentButtons;
