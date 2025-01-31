import { createContext, ReactNode, useCallback, useState } from "react";

import { Loader } from "./Loader";
import { InitLoaderCtxMethodsType, InitLoaderCtxStateType } from "./types";

const initSnackbarStateCtx: InitLoaderCtxStateType = {
  isShow: true,
};

const initSnackbarMethodsCtx: InitLoaderCtxMethodsType = {
  handleShow: () => {},
  handleHide: () => {},
};

type CtxType = InitLoaderCtxStateType & InitLoaderCtxMethodsType;

export const LoaderCtx = createContext<CtxType>({
  ...initSnackbarStateCtx,
  ...initSnackbarMethodsCtx,
});

type Props = {
  children: ReactNode;
};

export const LoaderCtxProvider = ({ children }: Props) => {
  const [state, setState] = useState(initSnackbarStateCtx);

  const handleShow = useCallback(() => {
    setState({ isShow: true });
  }, []);

  const handleHide = useCallback(() => {
    setState({ isShow: false });
  }, []);

  return (
    <LoaderCtx.Provider value={{ ...state, handleShow, handleHide }}>
      {children}
      <Loader />
    </LoaderCtx.Provider>
  );
};
