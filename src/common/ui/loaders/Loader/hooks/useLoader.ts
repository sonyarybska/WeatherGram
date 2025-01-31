import { useContext } from "react";

import { LoaderCtx } from "../LoaderCtx";

type ReturnType = {
  handleShow: () => void;
  isShow: boolean;
  handleHide: () => void;
};

export const useLoader = (): ReturnType => {
  const snackbarData = useContext(LoaderCtx) as ReturnType;

  return {
    ...snackbarData,
  };
};
