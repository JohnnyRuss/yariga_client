/* eslint-disable react-hooks/exhaustive-deps */
import { nanoid } from "@reduxjs/toolkit";
import { useState, useReducer, useCallback } from "react";

import { MAX_IMAGE_COUNT_PER_SMS, MAX_IMAGE_SIZE_ON_CHAT } from "config/config";

import cloudinaryUpload, {
  CloudinaryUploadItemT,
  CloudinaryProgressCallbackT,
} from "services/cloudinary";

type ImageUploadStateT = {
  images: Array<CloudinaryUploadItemT>;
};

type UploadImageActionsT =
  | {
      type: "SET_IMAGES";
      payload: { images: Array<CloudinaryUploadItemT> };
    }
  | { type: "REMOVE_IMAGE"; payload: { fileId: string } }
  | {
      type: "SET_IMAGE_PROGRESS";
      payload: { loaded: number; total: number; fileId: string };
    }
  | {
      type: "SET_IMAGE_URL";
      payload: { secure_url: string; fileId: string };
    }
  | {
      type: "CLEAN_UP_IMAGES";
      payload?: "";
    };

const imageUploadState: ImageUploadStateT = {
  images: [],
};

export default function useImageUpload() {
  const [state, dispatch] = useReducer(imageUploadReducer, imageUploadState);

  const [imageUploadWarning, setImageUploadWarning] = useState({
    hasWarning: false,
    message: "",
  });

  const [isUploadingImages, setIsUploadingImages] = useState(false);

  const onCloseOverlappedImageSizeAlert = useCallback(() => {
    setImageUploadWarning((prev) => ({
      ...prev,
      message: "",
      hasWarning: false,
    }));
  }, []);

  const onProgress = (): CloudinaryProgressCallbackT => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    return ({ loaded, total, fileId }) => {
      if (timeoutId && loaded < total) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        dispatch({
          type: "SET_IMAGE_PROGRESS",
          payload: { fileId, loaded, total },
        });
      }, 1000);
    };
  };

  const onImagesChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const files = Array.from(e.target.files || []);

        if (!files[0]) return;

        const isOverlapped =
          state.images.length + files.length > MAX_IMAGE_COUNT_PER_SMS;
        const containsOverSizeImage = files.some(
          (file) => file.size > MAX_IMAGE_SIZE_ON_CHAT
        );

        if (isOverlapped || containsOverSizeImage) {
          const message =
            containsOverSizeImage && isOverlapped
              ? `• Please upload images under 10MB. \n • Max allowed image count per message is — ${MAX_IMAGE_COUNT_PER_SMS}`
              : isOverlapped
              ? `Max allowed image count per message is — ${MAX_IMAGE_COUNT_PER_SMS}`
              : containsOverSizeImage
              ? "Please upload images under 10MB."
              : "";

          setImageUploadWarning((prev) => ({
            ...prev,
            message,
            hasWarning: true,
          }));
        }

        setIsUploadingImages(true);

        const uploadList = await getUploadableImages({
          files,
          images: state.images,
        });

        if (!uploadList[0]) return;

        dispatch({
          type: "SET_IMAGES",
          payload: { images: uploadList },
        });

        await Promise.all(
          uploadList.map(async (item, index, arr) => {
            try {
              const secure_url = await cloudinaryUpload({
                file: item.file,
                fileId: item.fileId,
                progressCallback: onProgress(),
              });

              dispatch({
                type: "SET_IMAGE_URL",
                payload: { secure_url, fileId: item.fileId },
              });
            } catch (error) {
              console.log(error);
            }
          })
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsUploadingImages(false);
      }
    },
    []
  );

  const onRemoveImage = useCallback(
    (fileId: string) => dispatch({ type: "REMOVE_IMAGE", payload: { fileId } }),
    []
  );

  const cleanUpImages = useCallback(() => {
    dispatch({ type: "CLEAN_UP_IMAGES" });
  }, []);

  return {
    cleanUpImages,
    onRemoveImage,
    onImagesChange,
    isUploadingImages,
    images: state.images,
    imageUploadWarning,
    onCloseOverlappedImageSizeAlert,
  };
}

function imageUploadReducer(
  state: ImageUploadStateT,
  { type, payload }: UploadImageActionsT
): ImageUploadStateT {
  switch (type) {
    case "SET_IMAGES": {
      const { images } = payload;

      return { ...state, images: [...state.images, ...images] };
    }

    case "REMOVE_IMAGE": {
      const { fileId } = payload;

      const updatedImages = state.images.filter(
        (image) => image.fileId !== fileId
      );

      return { ...state, images: [...updatedImages] };
    }

    case "SET_IMAGE_PROGRESS": {
      const { fileId, loaded, total } = payload;

      const progress = Math.round((loaded / total) * 100);

      const stateImagesShallow = [...state.images];

      const targetIndex = state.images.findIndex(
        (image) => image.fileId === fileId
      );

      stateImagesShallow[targetIndex].progress = progress;

      return {
        ...state,
        images: [...stateImagesShallow],
      };
    }

    case "SET_IMAGE_URL": {
      const { secure_url, fileId } = payload;

      const stateImagesShallow = [...state.images];

      const targetIndex = state.images.findIndex(
        (image) => image.fileId === fileId
      );

      stateImagesShallow[targetIndex].secure_url = secure_url;

      return { ...state, images: [...stateImagesShallow] };
    }

    case "CLEAN_UP_IMAGES": {
      return { ...state, images: [] };
    }

    default:
      return state;
  }
}

async function getUploadableImages({
  files,
  images,
}: {
  files: Array<File>;
  images: Array<CloudinaryUploadItemT>;
}) {
  const limitLeft = MAX_IMAGE_COUNT_PER_SMS - images.length;

  return files
    .filter((file) => file.size <= MAX_IMAGE_SIZE_ON_CHAT)
    .filter((file) => !images.some((image) => file.name === image.file.name))
    .slice(0, limitLeft)
    .map((file) => ({
      file,
      progress: 0,
      secure_url: "",
      fileId: nanoid(),
    }));
}
