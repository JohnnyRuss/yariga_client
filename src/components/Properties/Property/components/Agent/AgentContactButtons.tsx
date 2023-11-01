import React from "react";

import ContactButton from "./ContactButton";
import { Call, Message } from "@mui/icons-material";
import { Stack } from "@mui/material";

interface AgentContactButtonsT {
  email: string;
  title: string;
}

const AgentContactButtons: React.FC<AgentContactButtonsT> = ({
  title,
  email,
}) => {
  return (
    <Stack direction="row" width="100%" gap="20px" mt="10px">
      <ContactButton
        label="Message"
        address={`mailto:${email}?&Agent=Yariga&subject=Yariga:%20${title}`}
        bgColor="app_blue.light"
        color="aoo_text.light"
        icon={<Message />}
      />

      <ContactButton
        label="Call"
        address="tel:+001133"
        bgColor="app_green.main"
        color="aoo_text.light"
        icon={<Call />}
      />
    </Stack>
  );
};

export default AgentContactButtons;
