import { useCallback, useState } from "react";

type Return = {
  isLoaderActive: boolean;
  disableLoader: () => void;
};

export const useLoader = (): Return => {
  const [isLoaderActive, setLoaderInactive] = useState(true);

  const disableLoader = useCallback(() => {
    setLoaderInactive(false);
  }, []);

  return {
    isLoaderActive,
    disableLoader,
  };
};
