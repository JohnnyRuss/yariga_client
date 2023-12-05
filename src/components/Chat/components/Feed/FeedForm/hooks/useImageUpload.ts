/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useReducer, useCallback } from "react";

import cloudinaryUpload, {
  CloudinaryUploadItemT,
  CloudinaryProgressCallbackT,
} from "services/cloudinary";

import FileControl from "utils/FileControl";
import { MAX_IMAGE_COUNT_PER_SMS } from "config/constants";

type ImageUploadStateT = {
  images: Array<CloudinaryUploadItemT>;
};

type UploadImageActionsT =
  | {
      type: "SET_IMAGES";
      payload: { base64urls: Array<CloudinaryUploadItemT> };
    }
  | { type: "REMOVE_IMAGE"; payload: { base64url: string } }
  | {
      type: "SET_IMAGE_PROGRESS";
      payload: { loaded: number; total: number; item: CloudinaryUploadItemT };
    }
  | {
      type: "SET_IMAGE_URL";
      payload: { secure_url: string; base64url: string };
    };

const imageUploadState: ImageUploadStateT = {
  images: [],
};

export default function useImageUpload() {
  const [state, dispatch] = useReducer(imageUploadReducer, imageUploadState);

  const [isUploadingImages, setIsUploadingImages] = useState(false);

  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const onProgress: CloudinaryProgressCallbackT = ({ loaded, total, item }) => {
    if (timeoutId && loaded < total) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      dispatch({
        type: "SET_IMAGE_PROGRESS",
        payload: { item: { ...item }, loaded, total },
      });
    }, 400);
  };

  const onImagesChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const files = Array.from(e.target.files || []);

        if (!files[0]) return;

        const uploadList = await getUploadableImages({
          files,
          images: state.images,
        });

        dispatch({
          type: "SET_IMAGES",
          payload: { base64urls: uploadList },
        });

        setIsUploadingImages(true);

        Promise.all(
          uploadList.map(async (item, index, arr) => {
            try {
              const secure_url = await cloudinaryUpload({
                uploadItem: item,
                progressCallback: onProgress,
              });

              dispatch({
                type: "SET_IMAGE_URL",
                payload: { secure_url, base64url: item.base64url },
              });

              if (index === arr.length - 1) setIsUploadingImages(false);
            } catch (error) {
              console.log(error);
              // throw error;
            }
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  const onRemoveImage = (base64url: string) =>
    dispatch({ type: "REMOVE_IMAGE", payload: { base64url } });

  return {
    onRemoveImage,
    onImagesChange,
    isUploadingImages,
    images: state.images,
  };
}

function imageUploadReducer(
  state: ImageUploadStateT,
  { type, payload }: UploadImageActionsT
): ImageUploadStateT {
  switch (type) {
    case "SET_IMAGES": {
      const { base64urls } = payload;

      return { ...state, images: [...state.images, ...base64urls] };
    }

    case "REMOVE_IMAGE": {
      const { base64url } = payload;

      const updatedImages = state.images.filter(
        (image) => image.base64url !== base64url
      );

      return { ...state, images: [...updatedImages] };
    }

    case "SET_IMAGE_PROGRESS": {
      const { item, loaded, total } = payload;

      const progress = Math.round((loaded / total) * 100);

      const stateImagesShallow = [...state.images];

      const targetIndex = state.images.findIndex(
        (image) => image.base64url === item.base64url
      );

      stateImagesShallow[targetIndex].progress = progress;

      return {
        ...state,
        images: [...stateImagesShallow],
      };
    }

    case "SET_IMAGE_URL": {
      const { secure_url, base64url } = payload;

      const stateImagesShallow = [...state.images];

      const targetIndex = state.images.findIndex(
        (image) => image.base64url === base64url
      );

      stateImagesShallow[targetIndex].secure_url = secure_url;

      return { ...state, images: [...stateImagesShallow] };
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

  return (await FileControl.convertMultipleFilesToBase64Str(files))
    .filter(
      (base64url) => !images.some((image) => image.base64url === base64url)
    )
    .slice(0, limitLeft)
    .map((base64url) => ({
      base64url,
      progress: 0,
      secure_url: "",
    }));
}
