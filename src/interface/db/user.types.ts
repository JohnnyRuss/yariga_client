export interface UserT {
  _id: string;
  email: string;
  username: string;
  avatar: string;
  properties: Array<string>;
}

export interface LoginResponseT {
  user: UserT;
  accessToken: string;
}
