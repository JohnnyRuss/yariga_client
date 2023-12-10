import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import SectionTitle from "../SectionTitle/SectionTitle";

interface GoBackButtonT {
  children?: React.ReactNode;
  path?: string;
}

const GoBackButton: React.FC<GoBackButtonT> = ({ children, path }) => {
  const navigate = useNavigate();

  const onBack = () => (path ? navigate(path) : navigate(-1));

  return (
    <Button
      onClick={onBack}
      variant="text"
      sx={{
        fontSize: "22px",
        display: "flex",
        alignItems: "center",
        fontWeight: 600,
        color: "app_text.dark",
        lineHeight: 1,
        textTransform: "none",
        width: "max-content",
      }}
    >
      <ArrowBackIos />

      <SectionTitle title={children as string} />
    </Button>
  );
};

export default GoBackButton;
