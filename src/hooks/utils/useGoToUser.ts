import { useNavigate } from "react-router-dom";
import { useUserPath } from "hooks/utils";

interface UseGoToUserReturnT {
  onGoToUser: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

export default function useGoToUser(
  candidateUserId: string,
  isAgent = false
): UseGoToUserReturnT {
  const navigate = useNavigate();
  const { userPath } = useUserPath(candidateUserId, isAgent);

  const onGoToUser = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    navigate(userPath);
  };

  return { onGoToUser };
}
