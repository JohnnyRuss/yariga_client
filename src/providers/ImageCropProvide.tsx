import { useState, createContext, useContext } from "react";
import { type Crop } from "react-image-crop";
import FileControl from "utils/FileControl";

type ImageCropProviderContextT = {
  openChangeProfileModal: boolean;
  setOpenChangeProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseModal: () => void;
  file: string;
  crop: Crop;
  setCrop: React.Dispatch<React.SetStateAction<Crop>>;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getCroppedImg: (renderedImage: HTMLImageElement) => File | void;
};

type ImageCropProviderT = {
  children: React.ReactNode;
};

const ImageCropContext = createContext<ImageCropProviderContextT>({
  openChangeProfileModal: false,
  setOpenChangeProfileModal: () => {},
  onCloseModal: () => {},
  file: "",
  crop: { height: NaN, width: NaN, unit: "px", x: NaN, y: NaN },
  setCrop: () => {},
  onFileChange: () => {},
  getCroppedImg: () => {},
});

const CROP_DEFAULTS: Crop = {
  height: 260,
  width: 260,
  unit: "px",
  x: 50,
  y: 0,
};

const ImageCropProvider: React.FC<ImageCropProviderT> = ({ children }) => {
  const [openChangeProfileModal, setOpenChangeProfileModal] = useState(false);

  const [file, setFile] = useState<string>("");

  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(
    null
  );

  const [crop, setCrop] = useState<Crop>(CROP_DEFAULTS);

  const onCloseModal = () => {
    setOpenChangeProfileModal(false);
    setFile("");
    setOriginalImage(null);
    setCrop((prev) => ({ ...prev, ...CROP_DEFAULTS }));
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.files?.[0];

    if (!target) return;

    const imgURL = URL.createObjectURL(target);

    const imgEl = new Image();
    imgEl.src = imgURL;

    imgEl.onload = () => {
      setFile(imgURL);
      setOriginalImage(imgEl);
      setCrop(() => CROP_DEFAULTS);
    };
  };

  const getCroppedImg = (renderedImage: HTMLImageElement): File | void => {
    if (!renderedImage || !originalImage) return;

    const { width: renderedX, height: renderedY } =
      renderedImage.getBoundingClientRect();

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width;
    canvas.height = crop.height;

    const scaleX = originalImage.naturalWidth / renderedX;
    const scaleY = originalImage.naturalHeight / renderedY;

    if (ctx) {
      ctx.drawImage(
        originalImage,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );
    }

    setCrop((prev) => ({
      ...prev,
      height: NaN,
      width: NaN,
      unit: "px",
      x: NaN,
      y: NaN,
    }));

    const dataURL = canvas.toDataURL("image/png");

    return FileControl.convertBase64StrToFile(dataURL);
  };

  return (
    <ImageCropContext.Provider
      value={{
        file,
        crop,
        setCrop,
        onFileChange,
        getCroppedImg,
        onCloseModal,
        openChangeProfileModal,
        setOpenChangeProfileModal,
      }}
    >
      {children}
    </ImageCropContext.Provider>
  );
};

export default ImageCropProvider;

export const useImageCropContext = () => useContext(ImageCropContext);
