import { CircularProgress, CircularProgressProps, Stack } from "@mui/material";

type Props = {
  circularProgressProp?: CircularProgressProps;
};

export const Loader: React.FC<Props> = ({ circularProgressProp }) => (
  <Stack justifyContent="center" alignItems="center" height="100%">
    <CircularProgress size={60} thickness={5} {...circularProgressProp} />
  </Stack>
);
