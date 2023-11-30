import { DYNAMIC_PATHS, PATHS } from "config/paths";
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
    ? DYNAMIC_PATHS.agent_page(candidateUserId)
    : isAuthenticatedUser
    ? PATHS.user_iprofile_page
    : DYNAMIC_PATHS.user_profile_page(candidateUserId);

  return { userPath };
}
