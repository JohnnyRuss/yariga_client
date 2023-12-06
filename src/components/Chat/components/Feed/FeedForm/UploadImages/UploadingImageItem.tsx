/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";

import * as UI from "./";
import { Box } from "@mui/material";

import { CloudinaryUploadItemT } from "services/cloudinary";

type UploadingImageItemT = {
  image: CloudinaryUploadItemT;
  onRemoveImage: (src: string) => void;
};

const UploadingImageItem: React.FC<UploadingImageItemT> = ({
  image,
  onRemoveImage,
}) => {
  const src = useMemo(() => URL.createObjectURL(image.file), []);

  return (
    <Box
      width="70px"
      height="70px"
      borderRadius="5px"
      overflow="hidden"
      position="relative"
    >
      <UI.UploadingImage
        src={src}
        fileId={image.fileId}
        progress={image.progress}
        onRemoveImage={onRemoveImage}
      />

      {image.progress < 100 && <UI.Progress progress={image.progress} />}
    </Box>
  );
};

export default UploadingImageItem;
