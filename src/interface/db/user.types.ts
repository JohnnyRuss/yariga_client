import { EditProfileFormT } from "utils/zod/editProfileValidation";

type UserT = {
  _id: string;
  email: string;
  username: string;
  avatar: string;
  phone?: string;
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

type LoginResponseT = {
  user: UserT;
  accessToken: string;
};

type GetGuestArgsT = {
  userId: string;
};

type UpdateUserArgsT = {
  userId: string;
  data: EditProfileFormT;
};

export type { UserT, LoginResponseT, GetGuestArgsT, UpdateUserArgsT };
