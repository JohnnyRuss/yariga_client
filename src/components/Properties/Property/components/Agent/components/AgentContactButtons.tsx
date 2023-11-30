import { Grid } from "@mui/material";
import { EmailButton, PhoneButton, ChatWithButton } from "components/Layouts";

import { PropertyOwnerT } from "interface/db/properties.types";

interface AgentContactButtonsT {
  title: string;
  owner: PropertyOwnerT;
}

const AgentContactButtons: React.FC<AgentContactButtonsT> = ({
  title,
  owner,
}) => {
  return (
    <Grid container mt="10px" maxWidth="100%">
      <Grid xs={12} xl={owner.phone ? 6 : 12} p={1}>
        <EmailButton email={owner.email} subject={title} />
      </Grid>

      {owner.phone && (
        <Grid xs={12} xl={6} p={1}>
          <PhoneButton phone={owner.phone} />
        </Grid>
      )}

      <Grid xs={12} p={1}>
        <ChatWithButton adressatId={owner._id} adressatName={owner.username} />
      </Grid>
    </Grid>
  );
};

export default AgentContactButtons;
