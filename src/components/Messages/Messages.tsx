import { Stack } from "@mui/material";
import { ContentBox, SectionTitle } from "components/Layouts";

const Messages: React.FC = () => {
  return (
    <ContentBox>
      <SectionTitle title="Messages" />

      <Stack className="content__box"></Stack>
    </ContentBox>
  );
};

export default Messages;
