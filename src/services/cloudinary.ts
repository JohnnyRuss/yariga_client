import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_UPLOAD_PRESET,
} from "config/env";
import FileControl from "utils/FileControl";
import axios, { AxiosProgressEvent } from "axios";

type CloudinaryUploadItemT = {
  base64url: string;
  progress: number;
  secure_url: string;
};

type CloudinaryProgressCallbackT = (args: {
  loaded: number;
  total: number;
  item: CloudinaryUploadItemT;
}) => void;

type CloudinaryUploadT = {
  uploadItem: CloudinaryUploadItemT;
  progressCallback: CloudinaryProgressCallbackT;
};

const cloudinaryUpload = async (args: CloudinaryUploadT): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append("file", args.uploadItem.base64url);
    formData.append("upload_preset", CLOUDINARY_API_UPLOAD_PRESET!);

    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          public_id: `chat/${FileControl.generateRandomFileName()}`,
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          args.progressCallback({
            loaded: progressEvent.loaded,
            total: progressEvent.total || 0,
            item: { ...args.uploadItem },
          });
        },
      }
    );

    return data.secure_url;
  } catch (error) {
    throw error;
  }
};

export default cloudinaryUpload;
export type {
  CloudinaryUploadT,
  CloudinaryUploadItemT,
  CloudinaryProgressCallbackT,
};
