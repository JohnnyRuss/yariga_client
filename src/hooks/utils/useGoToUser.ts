import { useNavigate } from "react-router-dom";
import { useUserPath } from "hooks/utils";

export default function useGoToUser(candidateUserId: string) {
  const navigate = useNavigate();
  const { userPath } = useUserPath(candidateUserId);

  const onGoToUser = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    navigate(userPath);
  };

  return { onGoToUser };
}
