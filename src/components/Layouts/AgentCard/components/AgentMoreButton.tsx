import { Button } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";

const AgentMoreButton: React.FC = () => {
  const onOptions = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Button
      onClick={onOptions}
      variant="text"
      sx={{
        position: "absolute",
        top: "10px",
        right: "10px",
        color: "app_text.dark",
      }}
    >
      <MoreHoriz sx={{ fontSize: "28px" }} />
    </Button>
  );
};

export default AgentMoreButton;
