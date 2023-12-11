import * as UI from "./components";
import { Stack } from "@mui/material";
import { ContentBox, SectionTitle } from "components/Layouts";

const Agents: React.FC = () => {
  return (
    <ContentBox>
      <SectionTitle title="Agents" />

      <Stack className="content__box" pb={1}>
        <UI.AgentsList />

        <UI.AgentsPagination />
      </Stack>
    </ContentBox>
  );
};

export default Agents;
