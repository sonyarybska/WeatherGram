import { Grid2 as Grid } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const WeatherDetailItem: React.FC<Props> = ({ children }) => (
  <Grid size={4} container direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
    {children}
  </Grid>
);

export default WeatherDetailItem;
