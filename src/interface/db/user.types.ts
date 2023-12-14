import { EditProfileFormT } from "utils/zod/editProfileValidation";

type UserT = {
  _id: string;
  email: string;
  username: string;
  avatar: string;
  phone?: string;
  role: "AGENT" | "USER";
  location?: {
    name: string;
    displayName: string;
    city: string;
    country: string;
    state: string;
    addressType: string;
    lat: string;
    lon: string;
  } | null;
};

type UserSearchT = {
  username: string;
  email: string;
  _id: string;
  avatar: string;
  role: "AGENT" | "USER";
};

type GetGuestArgsT = {
  userId: string;
};

type UpdateUserArgsT = {
  userId: string;
  data: EditProfileFormT;
};

type UpdateProfileImageArgsT = {
  file: File;
  userId: string;
};

type UpdateProfileImageResponseT = {
  url: string;
};

export type {
  UserT,
  UserSearchT,
  GetGuestArgsT,
  UpdateUserArgsT,
  UpdateProfileImageArgsT,
  UpdateProfileImageResponseT,
};
