import { memo } from "react";

import * as UI from "./";
import { Box } from "@mui/material";

type UploadingImageT = {
  src: string;
  fileId: string;
  progress: number;
  onRemoveImage: (src: string) => void;
};

const UploadingImage: React.FC<UploadingImageT> = ({
  src,
  fileId,
  progress,
  onRemoveImage,
}) => {
  return (
    <Box component="figure" width="100%" height="100%">
      <UI.Image src={src} />

      {progress === 100 && (
        <UI.RemoveImageButton fileId={fileId} onRemoveImage={onRemoveImage} />
      )}
    </Box>
  );
};

export default memo(UploadingImage);
