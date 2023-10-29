export interface UserT {
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
    postcode: string;
    addressType: string;
    lat: string;
    lon: string;
  } | null;
}

export interface GetUserArgsT {
  userId: string;
}

export interface LoginResponseT {
  user: UserT;
  accessToken: string;
}
