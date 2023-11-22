import { Stack, Typography, TextField } from "@mui/material";
import { Modal, Button } from "components/Layouts";

interface RatingModalT {
  isOpen: boolean;
  feedback: string;
  onClose: () => void;
  onSendFeedBack: () => void;
  onFeedbackChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RatingModal: React.FC<RatingModalT> = ({
  isOpen,
  onClose,
  feedback,
  onFeedbackChange,
  onSendFeedBack,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Stack
        gap={3}
        overflow="hidden"
        borderRadius="18px"
        bgcolor="app_bg.main"
        justifyContent="space-between"
        width={{ xs: "90vw", md: "30vw" }}
        minHeight={{ xs: "300px", md: "200px" }}
        p={{ xs: "45px 25px 25px", md: "30px 25px 25px" }}
      >
        <Typography fontSize={26} fontWeight={600}>
          Give feedback to owner
        </Typography>

        <TextField
          multiline
          fullWidth
          minRows={3}
          maxRows={6}
          value={feedback}
          onChange={onFeedbackChange}
          placeholder="Your feedback here..."
          inputProps={{
            className: "custom_scrollbar",
          }}
        />

        <Button
          title="Send"
          fullWidth={true}
          attributes={{ sx: { flex: "none" } }}
          onClick={onSendFeedBack}
        />
      </Stack>
    </Modal>
  );
};

export default RatingModal;
