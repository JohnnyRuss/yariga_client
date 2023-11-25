import { ContentBox, SectionTitle } from "components/Layouts";
import CreatePropertyForm from "./components/CreatePropertyForm";

const CreateProperty: React.FC = () => {
  const isUpdateProcess =
    new URLSearchParams(window.location.search).get("process") === "update";

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
