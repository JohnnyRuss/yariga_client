import { useNavigate } from "react-router-dom";

import { PATHS } from "config/paths";

import { Add } from "@mui/icons-material";
import { Button } from "components/Layouts";

interface AddPropertyButtonT {}

const AddPropertyButton: React.FC<AddPropertyButtonT> = () => {
  const navigate = useNavigate();

  const onAddProperty = () => navigate(PATHS.create_property_page);

  return (
    <Button
      title="Add Property"
      onClick={onAddProperty}
      bgColor="app_blue.light"
      color="app_text.light"
      icon={<Add />}
      attributes={{
        sx: { width: ["100%", "fit-content"] },
      }}
    />
  );
};

export default AddPropertyButton;
