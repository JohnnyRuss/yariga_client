import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_UPLOAD_PRESET,
} from "config/env";
import axios, { AxiosProgressEvent } from "axios";
import FileControl from "utils/FileControl";

type CloudinaryUploadItemT = {
  file: File;
  progress: number;
  secure_url: string;
  fileId: string;
};

type CloudinaryProgressCallbackT = (args: {
  total: number;
  loaded: number;
  fileId: string;
}) => void;

type CloudinaryUploadT = {
  file: File;
  fileId: string;
  progressCallback: CloudinaryProgressCallbackT;
};

const cloudinaryUpload = async (args: CloudinaryUploadT): Promise<any> => {
  try {
    const formData = new FormData();
    formData.append("file", args.file);
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
            fileId: args.fileId,
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
