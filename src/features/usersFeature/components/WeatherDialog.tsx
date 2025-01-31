import { Box, DialogContent, DialogProps, Stack, Typography, Grid2 as Grid } from "@mui/material";
import { CiDroplet } from "react-icons/ci";
import { FaTemperatureHalf } from "react-icons/fa6";
import { PiSunHorizon } from "react-icons/pi";
import { TbTriangle, TbTriangleInverted } from "react-icons/tb";
import MapComponent from "@common/components/MapComponent/MapComponent";
import WeatherIcon from "@common/components/WeatherIcon/WeatherIcon";
import { Dialog } from "@common/ui";
import { Weather } from "@common/types";

import WeatherForecast from "./WeatherForecast";
import WeatherDetailItem from "./WeatherDetailItem";

type Props = DialogProps & {
  handleClose: () => void;
  isOpen: boolean;
  latitude: number;
  longitude: number;
  zoom?: number;
  weather?: Weather | undefined;
  userAvatar: string;
  userLocation: string;
};

const WeatherDialog: React.FC<Props> = ({
  latitude,
  longitude,
  zoom,
  userAvatar,
  weather,
  handleClose,
  isOpen,
  userLocation,
}) => {
  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogContent sx={{ width: "100%" }}>
        <Grid container spacing={5}>
          <Grid size={12}>
            <Stack direction="row" alignItems={"center"} gap={3}>
              <WeatherIcon withTitle={false} size={40} code={weather?.current.weather_code} />
              <Box>
                <Typography variant="h4">
                  {`${weather?.current.temperature_2m}
                  ${weather?.current_units.temperature_2m}`}
                </Typography>
                <Typography variant="h4">{userLocation}</Typography>
              </Box>
            </Stack>
          </Grid>

          <WeatherDetailItem>
            <FaTemperatureHalf size={40} />
            <Box>
              <Typography sx={{ typography: { xs: "subtitle1", sm: "h6" } }}>
                L: {weather?.daily.temperature_2m_min}°C
              </Typography>
              <Typography sx={{ typography: { xs: "subtitle1", sm: "h6" } }}>
                H: {weather?.daily.temperature_2m_max}°C
              </Typography>
            </Box>
          </WeatherDetailItem>

          <WeatherDetailItem>
            <CiDroplet size={40} />
            <Box>
              <Typography sx={{ typography: { xs: "subtitle1", sm: "h6" } }}>
                Max: {weather?.daily.precipitation_probability_max}%
              </Typography>
              <Typography sx={{ typography: { xs: "subtitle1", sm: "h6" } }}>
                Min: {weather?.daily.precipitation_probability_min}%
              </Typography>
            </Box>
          </WeatherDetailItem>

          <WeatherDetailItem>
            <PiSunHorizon size={40} />
            <Stack>
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                <TbTriangle size={12} />
                <Typography sx={{ typography: { xs: "subtitle1", sm: "h6" } }}>
                  {weather?.daily.sunrise
                    ? `${new Date(weather?.daily.sunrise).getHours()}:${new Date(
                        weather?.daily.sunrise
                      ).getMinutes()}`
                    : null}
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                <TbTriangleInverted size={12} />
                <Typography sx={{ typography: { xs: "subtitle1", sm: "h6" } }}>
                  {weather?.daily.sunrise
                    ? `${new Date(weather?.daily.sunset).getHours()}:${new Date(
                        weather?.daily.sunrise
                      ).getMinutes()}`
                    : null}
                </Typography>
              </Stack>
            </Stack>
          </WeatherDetailItem>

          <Grid size={12}>
            <WeatherIcon withTitle={true} size={70} code={weather?.current.weather_code} />
          </Grid>

          <Grid size={12}>
            <WeatherForecast weather={weather} />
          </Grid>

          <Grid size={12}>
            <MapComponent
              latitude={latitude}
              longitude={longitude}
              zoom={zoom}
              userAvatarUrl={userAvatar}
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default WeatherDialog;
