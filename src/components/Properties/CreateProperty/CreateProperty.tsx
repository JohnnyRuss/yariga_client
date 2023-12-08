import { useSearchParams } from "hooks/utils";

import { ContentBox, SectionTitle } from "components/Layouts";
import CreatePropertyForm from "./components/CreatePropertyForm";

const CreateProperty: React.FC = () => {
  const { getParamValue } = useSearchParams();
  const isUpdateProcess = getParamValue("process") === "update";

  return (
    <ContentBox>
      <SectionTitle
        title={isUpdateProcess ? "Update Property" : "Create Property"}
      />

      <CreatePropertyForm />
    </ContentBox>
  );
};

export default CreateProperty;
