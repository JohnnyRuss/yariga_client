import { ContactButton } from "./";
import { Stack } from "@mui/material";
import { Call, Message } from "@mui/icons-material";

interface AgentContactButtonsT {
  email: string;
  phone: string;
  title: string;
}

const AgentContactButtons: React.FC<AgentContactButtonsT> = ({
  title,
  email,
  phone,
}) => {
  return (
    <Stack
      direction={{ xs: "column", xl: "row" }}
      width="100%"
      gap="20px"
      mt="10px"
    >
      <ContactButton
        label="Message"
        address={`mailto:${email}?&Agent=Yariga&subject=Yariga:%20${title}`}
        bgColor="app_blue.light"
        color="aoo_text.light"
        icon={<Message />}
      />

      <ContactButton
        label="Call"
        address={`tel:${phone}`}
        bgColor="app_green.main"
        color="aoo_text.light"
        icon={<Call />}
      />
    </Stack>
  );
};

export default AgentContactButtons;
