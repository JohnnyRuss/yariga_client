import { dynamic_paths, paths } from "config/paths";
import useIsAuthenticatedUser from "./useIsAuthenticatedUser";

interface UseUserPathReturnT {
  userPath: string;
}

export default function useUserPath(
  candidateUserId: string,
  isAgent = false
): UseUserPathReturnT {
  const { isAuthenticatedUser } = useIsAuthenticatedUser(candidateUserId);

  const userPath = isAgent
    ? dynamic_paths.agent_page(candidateUserId)
    : isAuthenticatedUser
    ? paths.user_iprofile_page
    : dynamic_paths.user_profile_page(candidateUserId);

  return { userPath };
}
