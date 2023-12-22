/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";

import * as UI from "./";
import * as MuiStyled from "./UploadImages.styled";

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
    <MuiStyled.UploadingImageItem>
      <UI.UploadingImage
        src={src}
        fileId={image.fileId}
        progress={image.progress}
        onRemoveImage={onRemoveImage}
      />

      {image.progress < 100 && <UI.Progress progress={image.progress} />}
    </MuiStyled.UploadingImageItem>
  );
};

export default UploadingImageItem;
