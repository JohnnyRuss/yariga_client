import { useChatQuery } from "hooks/api/messages";

import { ContactButton } from "./";
import { Button, Grid } from "@mui/material";
import { Call, Message, Email } from "@mui/icons-material";

import { PropertyOwnerT } from "interface/db/properties.types";

interface AgentContactButtonsT {
  title: string;
  owner: PropertyOwnerT;
}

const AgentContactButtons: React.FC<AgentContactButtonsT> = ({
  title,
  owner,
}) => {
  const { createConversationAndGetAll } = useChatQuery();

  const onStartConversation = () =>
    createConversationAndGetAll({ adressat: owner._id });

  return (
    <Grid container mt="10px" maxWidth="100%">
      <Grid xs={12} xl={6} p={1}>
        <ContactButton
          label="Email"
          address={`mailto:${owner.email}?&Agent=Yariga&subject=Yariga:%20${title}`}
          bgColor="app_blue.light"
          color="aoo_text.light"
          icon={<Email />}
        />
      </Grid>

      <Grid xs={12} xl={6} p={1}>
        <ContactButton
          label="Call"
          address={`tel:${owner.phone}`}
          bgColor="app_green.main"
          color="aoo_text.light"
          icon={<Call />}
        />
      </Grid>

      <Grid xs={12} p={1}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<Message />}
          onClick={onStartConversation}
          sx={{ padding: "10px 15px", maxWidth: "100%" }}
        >
          Chat with {owner.username.split(" ")[0]}
        </Button>
      </Grid>
    </Grid>
  );
};

export default AgentContactButtons;
