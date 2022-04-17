import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
  
    if (typeof onBefore !== "function") return;

    const handle = (event) => {
      console.log(event);
      const { clientX, clientY } = event;
      if (clientX <= 0 || clientY <= 0) {
        onBefore();
      }
    };
};

export default useBeforeLeave;