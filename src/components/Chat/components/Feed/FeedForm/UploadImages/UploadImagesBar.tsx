import { memo } from "react";

import * as UI from "./";
import { Stack } from "@mui/material";

import { CloudinaryUploadItemT } from "services/cloudinary";

type UploadImagesBarT = {
  onRemoveImage: (src: string) => void;
  imagesToUpload: Array<CloudinaryUploadItemT>;
};

const UploadImagesBar: React.FC<UploadImagesBarT> = ({
  onRemoveImage,
  imagesToUpload,
}) => {
  return (
    <Stack direction="row" gap={1} px={1}>
      {imagesToUpload.map((image, index) => (
        <UI.UploadingImageItem
          image={image}
          onRemoveImage={onRemoveImage}
          key={`uploading-image__${index}`}
        />
      ))}
    </Stack>
  );
};

export default memo(UploadImagesBar);
