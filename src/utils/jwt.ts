import { YARIGA_JWT_KEY } from "config/config";

const setJWT = (token: string): void =>
  localStorage.setItem(YARIGA_JWT_KEY, token);

const getJWT = (): string => localStorage.getItem(YARIGA_JWT_KEY) || "";

const removeJWT = (): void => localStorage.removeItem(YARIGA_JWT_KEY);

export { getJWT, removeJWT, setJWT };
