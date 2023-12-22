import * as MuiStyled from "./UploadImages.styled";
import { Close } from "@mui/icons-material";

type RemoveImageButtonT = {
  fileId: string;
  onRemoveImage: (src: string) => void;
};

const RemoveImageButton: React.FC<RemoveImageButtonT> = ({
  fileId,
  onRemoveImage,
}) => {
  return (
    <MuiStyled.RemoveImageButton
      variant="text"
      onClick={() => onRemoveImage(fileId)}
    >
      <Close className="remove__icon" />
    </MuiStyled.RemoveImageButton>
  );
};

export default RemoveImageButton;
