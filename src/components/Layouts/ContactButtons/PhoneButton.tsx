import { Call } from "@mui/icons-material";
import { MuiButton } from "./Button.styled";

type PhoneButtonT = { phone: string };

const PhoneButton: React.FC<PhoneButtonT> = ({ phone }) => {
  return (
    <MuiButton
      fullWidth
      variant="contained"
      bgcolor="app_green.main"
      textcolor="aoo_text.light"
    >
      <a href={`tel:${phone}`}>
        <Call />
        Call
      </a>
    </MuiButton>
  );
};

export default PhoneButton;
