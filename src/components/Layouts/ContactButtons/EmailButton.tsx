import { Email } from "@mui/icons-material";
import { MuiButton } from "./Button.styled";

type EmailButtonT = {
  email: string;
  subject: string;
};

const EmailButton: React.FC<EmailButtonT> = ({ email, subject }) => {
  return (
    <MuiButton
      fullWidth
      variant="contained"
      bgcolor="app_blue.light"
      textcolor="app_text.light"
    >
      <a href={`mailto:${email}?&Agent=Yariga&subject=Yariga:%20${subject}`}>
        <Email />
        Email
      </a>
    </MuiButton>
  );
};

export default EmailButton;
