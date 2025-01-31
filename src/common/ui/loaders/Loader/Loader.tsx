import { CircularProgress, CircularProgressProps } from "@mui/material";

import { useLoader } from "./hooks";

type Props = {
  circularProgressProp?: CircularProgressProps;
};

export const Loader: React.FC<Props> = ({ circularProgressProp }) => {
  const { isShow } = useLoader();

  return (
    <CircularProgress
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        bottom: 0,
        left: "50%",
        display: isShow ? "block" : "none",
      }}
      size={30}
      thickness={5}
      {...circularProgressProp}
    />
  );
};
