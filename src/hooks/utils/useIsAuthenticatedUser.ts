import { useAppSelector } from "store/hooks";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";

export default function useIsAuthenticatedUser(candidateUserId: string): {
  isAuthenticatedUser: boolean;
} {
  const authenticatedUser = useAppSelector(selectAuthenticatedUser);
  const isAuthenticatedUser = authenticatedUser._id === candidateUserId;

  return { isAuthenticatedUser };
}
