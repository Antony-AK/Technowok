import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const MetaPixelTracker = () => {
  const location = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (window.fbq) {
      if (isFirstLoad.current) {
        isFirstLoad.current = false;
        return; // skip duplicate first render
      }
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);

  return null;
};

export default MetaPixelTracker;