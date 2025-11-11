import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * - Listens for location changes and scrolls the window to top.
 * - Smooth behavior on browsers that support it.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } catch (err) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
