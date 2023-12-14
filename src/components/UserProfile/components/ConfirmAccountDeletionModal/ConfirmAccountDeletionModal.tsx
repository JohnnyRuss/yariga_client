import { Modal } from "components/Layouts";
import { Stack, Typography, Button, TextField } from "@mui/material";

type ConfirmAccountDeletionModalT = {
  open: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  onConfirmAccountDeletion: () => void;
};

const ConfirmAccountDeletionModal: React.FC<ConfirmAccountDeletionModalT> = ({
  open,
  onClose,
  value,
  onChange,
  onConfirmAccountDeletion,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Stack
        bgcolor="app_bg.main"
        width={{ xs: "25vw" }}
        height={{ xs: "35vh" }}
        px={3}
        pt={6}
        pb={2}
        borderRadius={2}
      >
        <Typography fontWeight={600} fontSize={24}>
          Enter your password
        </Typography>

        <TextField
          placeholder="password"
          sx={{ margin: "auto 0" }}
          value={value}
          onChange={onChange}
        />

        <Button
          onClick={onConfirmAccountDeletion}
          variant="contained"
          sx={{
            backgroundColor: "app_blue.light",
            padding: "10px 0",
            "&:hover": { backgroundColor: "app_blue.light" },
          }}
        >
          Delete Account
        </Button>
      </Stack>
    </Modal>
  );
};

export default ConfirmAccountDeletionModal;
