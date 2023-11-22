import { ContentBox, SectionTitle } from "components/Layouts";
import CreatePropertyForm from "./components/CreatePropertyForm";

const CreateProperty: React.FC = () => {
  return (
    <ContentBox>
      <SectionTitle title="Create Property" />

      <CreatePropertyForm />
    </ContentBox>
  );
};

export default CreateProperty;
