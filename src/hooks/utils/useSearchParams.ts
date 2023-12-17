import { useNavigate, useLocation } from "react-router-dom";

export default function useSearchParams() {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const searchParams = new URLSearchParams(search);

  const removeParam = (key: string, replace?: boolean) => {
    searchParams.delete(key);
    navigate(`${pathname}?${searchParams.toString()}`, {
      replace: replace ? true : false,
    });
  };

  const appendParam = (key: string, value: string) => {
    searchParams.set(key, value);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const getParamValue = (key: string) => searchParams.get(key);

  return { removeParam, appendParam, getParamValue };
}
