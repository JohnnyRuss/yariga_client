import { dynamic_paths, paths } from "config/paths";
import useIsAuthenticatedUser from "./useIsAuthenticatedUser";

export default function useUserPath(candidateUserId: string): {
  userPath: string;
} {
  const { isAuthenticatedUser } = useIsAuthenticatedUser(candidateUserId);

  const userPath = isAuthenticatedUser
    ? paths.user_iprofile_page
    : dynamic_paths.profile_page(candidateUserId);

  return { userPath };
}
