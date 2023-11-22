/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export default function useScrollTo(scrollWindowToTopOnMount?: boolean) {
  const windowScrollToTop = () =>
    window.scrollTo({ behavior: "auto", left: 0, top: 0 });

  useEffect(() => {
    if (!scrollWindowToTopOnMount) return;

    windowScrollToTop();
  }, []);

  return { windowScrollToTop };
}
