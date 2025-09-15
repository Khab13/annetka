import { useEffect } from "react";

export const useBodyLock = (isLocked: boolean) => {
  useEffect(() => {
    document.body.classList.toggle("bodyLock", isLocked);
  }, [isLocked]);
};
